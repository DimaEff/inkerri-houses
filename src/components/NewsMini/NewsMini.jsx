import React from 'react';

import AppContainer from "../common/AppContainer/AppContainer";
import NewsItem from "../common/NewsItem/NewsItem";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import {firestoreCollections} from "../../utils/consts";
import useDocsWithPage from "../../hooks/useDocsWithPage";


const NewsMini = ({grey}) => {
    const {docs} = useDocsWithPage(firestoreCollections.news, 'date', 3, 'desc');

    return (
        <AppContainer aI={'flex-start'} jC={'flex-start'} title={'Новости'} grey={grey}>
            {docs.map(newsItem => <AppContainerItem aI={'flex-start'} jC={'flex-start'} key={newsItem.id} lg={4} md={4} sm={8} xs={12}>
                <NewsItem {...newsItem}/>
            </AppContainerItem>)}
        </AppContainer>
    );
};

export default NewsMini;