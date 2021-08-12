import React from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import {getStateNews} from "../../selectors/news_selector";
import {getNews} from "../../store/newsReducer";
import News from "./News";
import NewsItemPage from "./NewsItemPage";


const NewsContainer = () => {
    const {newsItemId} = useParams();

    if (newsItemId) return <NewsItemPage newsItemId={newsItemId}/>

    return <News />;
};

const mapStateToProps = (state) => ({
    news: getStateNews(state),
})

export default connect(mapStateToProps, {getNews})(NewsContainer);