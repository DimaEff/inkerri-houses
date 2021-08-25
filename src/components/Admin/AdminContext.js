import React from "react";

import {toNumber} from "../../utils/helpers";
import {commonAPI} from "../../firebase/api";
import {firestoreCollections} from "../../utils/consts";


export const addHouse = async (data, includesCount, docId) => {
    const files = data.imagesURL;

    const dataCopy = {
        title: data.title,
        usableArea: toNumber(data.usableArea),
        totalArea: toNumber(data.totalArea),
        dimensions: [toNumber(data.dimensions1), toNumber(data.dimensions2)],
        floors: data.floors,
        minPrice: toNumber(data.minPrice),
        maxPrice: toNumber(data.maxPrice),
        bedRooms: toNumber(data.bedRooms),
        bathRooms: toNumber(data.bathRooms),
        description: data.description,
    }

    const includes = [];

    for (let i=1; i <= includesCount; i++) {
        const includeName = `includes${i}`;
        const include = data[includeName];
        includes.push(include)
    }
    dataCopy.includes = includes;

    await commonAPI.addUpdateDoc(firestoreCollections.houses, files, dataCopy, docId)
}

export const addNewsItem = async (data, docId) => {
    const files = data.imagesURL;
    delete data.imagesURL;

    await commonAPI.addUpdateDoc(firestoreCollections.news, files, data, docId)
}

export const addBannerItem = async (e) => {
    const file = e.target.files;

    await commonAPI.addUpdateDoc(firestoreCollections.banners, file, {})
}

export default React.createContext({})