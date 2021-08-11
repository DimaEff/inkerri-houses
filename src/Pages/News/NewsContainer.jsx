import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useHistory, useParams} from "react-router-dom";

import {getStateNews} from "../../selectors/news_selector";
import {getNews} from "../../store/newsReducer";
import {getNewsRoute} from "../../AppRouter/consts";
import News from "./News";
import NewsItemPage from "./NewsItemPage";


const NewsContainer = () => {
    const {newsItemId} = useParams();
    const history = useHistory();

    useEffect(() => {
        if (newsItemId === ':newsItemId') history.push(getNewsRoute())
    })

    if (newsItemId) return <NewsItemPage newsItemId={newsItemId}/>

    return <News />;
};

const mapStateToProps = (state) => ({
    news: getStateNews(state),
})

export default connect(mapStateToProps, {getNews})(NewsContainer);