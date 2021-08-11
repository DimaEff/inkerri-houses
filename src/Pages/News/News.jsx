import React from 'react';
import {Typography} from "@material-ui/core";

import AppContainer from "../../components/common/AppContainer/AppContainer";
import NewsItem from "../../components/common/NewsItem/NewsItem";
import AppContainerItem from "../../components/common/AppContainer/AppContainerItem";
import useDocsWithPage from "../../hooks/useDocsWithPage";
import {firestoreCollections} from "../../utils/consts";
import MyButton from "../../components/common/Button/MyButton";


const News = () => {
    const {docs, handleStartFetch, isLastPage} =useDocsWithPage(firestoreCollections.news, 'date', 12, 'desc');

    return (<div>
            <AppContainer jC={'flex-start'} title={'Новости'}>
                {docs.map(newsItem => <AppContainerItem key={newsItem.id} lg={4} md={4} sm={6} xs={12}>
                    <NewsItem {...newsItem}/>
                </AppContainerItem>)}
            </AppContainer>
            <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                {isLastPage ?
                    <Typography variant={'subtitle2'} color={"error"}>Это все новости</Typography>:
                    <MyButton action={handleStartFetch}>Больше новостей</MyButton>
                }
            </AppContainerItem>
    </div>

    );
};

export default News;