import React from 'react';
import {useParams} from "react-router-dom";

import News from "./News";
import NewsItemPage from "./NewsItemPage";


const NewsContainer = () => {
    const {newsItemId} = useParams();

    if (newsItemId) return <NewsItemPage newsItemId={newsItemId}/>

    return <News />;
};

export default NewsContainer;