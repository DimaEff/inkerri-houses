import React from 'react';
import {Typography} from "@material-ui/core";

import AppContainer from "../../components/common/AppContainer/AppContainer";
import useGetDoc from "../../hooks/useGetDoc";
import {firestoreCollections} from "../../utils/consts";
import AppContainerItem from "../../components/common/AppContainer/AppContainerItem";
import TextContainer from "../../components/common/AppContainer/TextContainer";
import {getDateTemplate} from "../../utils/helpers";


const NewsItemPage = ({newsItemId}) => {
    const hewsItem = useGetDoc(firestoreCollections.news, newsItemId)

    return (
        <div>
            {newsItemId === null ?
                <Typography style={{margin: '50px'}} align={"center"} variant={'h4'} color={'error'}>
                    Элемент не найден
                </Typography>:
                hewsItem && <AppContainer withoutTitle>
                    <AppContainerItem jC={'center'} aI={'flex-start'} column lg={10} md={10} sm={12} xs={12}>
                        <TextContainer>
                            <div>
                                <img src={hewsItem.imagesURL[0]}/>
                            </div>
                                <div>
                                    <Typography variant={'h6'}>
                                        {getDateTemplate(hewsItem.date.toDate())}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant={'h4'} color={'error'}>
                                        {hewsItem.title}
                                    </Typography>
                                </div>
                                <div style={{width: '100%'}}>
                                    <Typography>
                                        {hewsItem.text}
                                    </Typography>
                                </div>
                        </TextContainer>
                    </AppContainerItem>
                </AppContainer>
            }

        </div>
    );
};

export default NewsItemPage;