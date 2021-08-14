import {db, storage, auth} from './index'
import firebase from "firebase";


const getCollectionData = async (collection) => {
    const response = await db.collection(collection).get();
    return response.docs.map(doc => ({id: doc.id, ...doc.data()}));
}

const getCollectionDataFromLimit = async (collection, orderField, limit, lastDoc, method) => {
    let response;

    if (!lastDoc) {
        response = await db.collection(collection)
            .orderBy(orderField, method || 'asc')
            .limit(limit)
            .get();
    } else {
        response = await db.collection(collection)
            .orderBy(orderField, method || 'asc')
            .startAfter(lastDoc)
            .limit(limit)
            .get();
    }

    return {
        data: response.docs.map(doc => ({id: doc.id, ...doc.data()})),
        lastDoc: response.docs[response.docs.length - 1],
        isLastPage: response.docs.length < limit,
    };
}

const getOneDoc = async (collection, docId) => {
    const doc = await db.collection(collection).doc(docId).get();

    if (doc.exists) {
        return {id: doc.id, ...doc.data()};
    }

    return false
}

const addUpdateData = async (collection, data, doc) => {
    await db.collection(collection).doc(doc).set(data);
}

const deleteData = async (collection, docId) => {
    await db.collection(collection).doc(docId).delete()
}

export const addImg = async (file) => {
    let imageURL = file;

    if (typeof file === 'object') {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        imageURL = await fileRef.getDownloadURL();
    }

    return imageURL;
}

export const deleteImg = async (imageURL) => {
    const imgRef = storage.refFromURL(imageURL);

    await imgRef.delete();
}

export const commonAPI = {
    async getCollection(collection) {
        return await getCollectionData(collection);
    },
    async getLimitCollection(collection, orderField, limit, lastDoc, method) {
        return await getCollectionDataFromLimit(collection, orderField, limit, lastDoc, method);
    },
    async getOneDoc(collection, docId) {
        return await getOneDoc(collection, docId);
    },
    async addUpdateDoc(docCollection, files, data, doc) {
        let imagesURL = [];

        for (const file of files) {
            const imageURL = await addImg(file);
            imagesURL.push(imageURL);
        }

        await addUpdateData(docCollection,
            {...data, imagesURL, date: firebase.firestore.Timestamp.fromDate(new Date())},
            doc);
    },
    async deleteDoc(docCollection, doc, imagesURL) {
        for (const imageURL of imagesURL) {
            await deleteImg(imageURL);
        }

        if (doc) await deleteData(docCollection, doc);
    },
};

export const userAPI = {
    async login(email, password) {
        const user = await auth.signInWithEmailAndPassword(email, password)
        return user.user;
    },
    async logout() {
        await auth.signOut();
    },
    async createNewUser(email, password) {
        await auth.createUserWithEmailAndPassword(email, password);
    },
}