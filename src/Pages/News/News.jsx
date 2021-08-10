import React from 'react';
import AppContainer from "../../components/common/AppContainer/AppContainer";
import NewsItem from "../../components/common/NewsItem/NewsItem";
import AppContainerItem from "../../components/common/AppContainer/AppContainerItem";

const News = ({news}) => {

    return (<div>
            {news && <AppContainer jC={'flex-start'} title={'Новости'}>
                {news.map(newsItem => <AppContainerItem key={newsItem.id} lg={4} md={4} sm={6} xs={12}>
                    <NewsItem {...newsItem}/>
                </AppContainerItem>)}
            </AppContainer>}
    </div>

    );
};

export default News;