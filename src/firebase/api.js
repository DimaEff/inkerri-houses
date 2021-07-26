import {db} from './index'
import {HOUSES, NEWS} from "./collections";


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

export const housesAPI = {
    async getHouses() {
        return await getCollectionData(HOUSES);
    },
    async addUpdateHouse(data, doc) {
        await addUpdateData(HOUSES, data, doc);
    },
    async deleteHouse(doc) {
        await deleteData(HOUSES, doc);
    },
};

export const newsAPI = {
    async getNews() {
        await getCollectionData(NEWS);
    },
    async addUpdateNews(data, doc) {
        await addUpdateData(NEWS, data, doc);
    },
    async deleteNews(doc) {
        await deleteData(NEWS, doc);
    },
}