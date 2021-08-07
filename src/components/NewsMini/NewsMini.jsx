import React from 'react';
import AppContainer from "../common/AppContainer/AppContainer";
import NewsItem from "../common/NewsItem/NewsItem";
import AppContainerItem from "../common/AppContainer/AppContainerItem";


const NewsMini = ({children, grey}) => {
    const news = children.slice(0, 3);

    return (
        <AppContainer title={'Новости'}  grey={grey}>
            {news.map(newsItem => <AppContainerItem key={newsItem.id} lg={4} md={4} sm={8} xs={12}>
                <NewsItem {...newsItem}/>
            </AppContainerItem>)}
        </AppContainer>
    );
};

export default NewsMini;