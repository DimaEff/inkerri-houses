import {db, storage, auth} from './index'


const getCollectionData = async (collection) => {
    const response = await db.collection(collection).get();
    return response.docs.map(doc => ({id: doc.id, ...doc.data()}));
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
    if (!docId) await db.collection(collection).doc(docId).delete()
}

const addImg = async (file) => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const imgURL = await fileRef.getDownloadURL();

    return imgURL;
}

export const commonAPI = {
    async getCollection(collection) {
        return await getCollectionData(collection);
    },
    async getOneDoc(collection, docId) {
        return await getOneDoc(collection, docId);
    },
    async addUpdateDoc(docCollection, file, data, doc) {
        let imgURL = file;
        if (typeof file !== 'string') {
            imgURL = await addImg(file);
        }

        await addUpdateData(docCollection, {...data, imgURL}, doc);
    },
    async deleteDoc(docCollection, doc) {
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

// export const housesAPI = {
//     async getHouses() {
//         return await getCollectionData(HOUSES);
//     },
//     async addUpdateHouse(file, data, doc) {
//         const imgURL = await addImg(file);
//         await addUpdateData(HOUSES, {...data, imgURL}, doc);
//     },
//     async deleteHouse(doc) {
//         await deleteData(HOUSES, doc);
//     },
// };
//
// export const newsAPI = {
//     async getNews() {
//         await getCollectionData(NEWS);
//     },
//     async addUpdateNews(file, data, doc) {
//         const imgURL = await addImg(file);
//         await addUpdateData(NEWS, {...data, imgURL}, doc);
//     },
//     async deleteNews(doc) {
//         await deleteData(NEWS, doc);
//     },
// }