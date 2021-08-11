import React, {useEffect, useState} from "react";

import {commonAPI} from "../firebase/api";


const useDocsWithPage = (collection, orderField, limit, method) => {
    const [isFetching, setIsFetching] = useState(true);
    const [docs, setDocs] = useState([]);
    const [lastDoc, setLastDoc] = useState();
    const [isLastPage, setIsLastPage] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const data = await commonAPI
                .getLimitCollection(collection, orderField, limit, lastDoc, method);

            setIsFetching(false);
            setDocs(docs => [...docs, ...data.data]);
            setLastDoc(data.lastDoc);
            setIsLastPage(data.isLastPage);
        }
        if (isFetching && !isLastPage) fetchData()
    }, [isFetching, isLastPage, lastDoc]);

    return {docs, isLastPage, handleStartFetch: () => setIsFetching(true), isFetching}
}

export default useDocsWithPage;