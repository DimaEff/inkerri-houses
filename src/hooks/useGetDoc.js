import React, {useEffect, useState} from "react";

import {commonAPI} from "../firebase/api";


const useGetDoc = (collection, docId) => {
    const [doc, setDoc] = useState();

    useEffect(() => {
        commonAPI.getOneDoc(collection, docId).then(data => {
            if (data) {
                setDoc(data);
            } else {
                setDoc(null);
            }
        });
    }, [collection, docId])

    return doc;
}

export default useGetDoc;