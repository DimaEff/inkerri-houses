import React from "react";

import {toNumber} from "../../utils/helpers";
import {commonAPI} from "../../firebase/api";
import {firestoreCollections} from "../../utils/consts";


export const addHouse = (data, includesCount, docId) => {
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

    commonAPI.addUpdateDoc(firestoreCollections.houses, files, dataCopy, docId)
}

export const addNewsItem = (data, docId) => {
    const files = data.imagesURL;
    delete data.imagesURL;

    commonAPI.addUpdateDoc(firestoreCollections.news, files, data, docId)
}

export default React.createContext({})