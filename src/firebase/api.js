import firebase from "firebase";

import {db, storage, auth} from './index'


const getCollectionData = async (collection) => {
    const response = await db.collection(collection).get();
    return response.docs.map(doc => doc.data());
}

const addUpdateData = async (collection, data, doc) => {
    await db.collection(collection).doc(doc).set(data);
}

const deleteData = async (collection, doc) => {
    if (!doc) await db.collection(collection).doc(doc).delete()
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

    },
    async logout() {
        await firebase.auth().signOut();
    },
    async getAllUsers() {

    },
    async createNewUser(email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    async deleteUser(email) {

    }
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