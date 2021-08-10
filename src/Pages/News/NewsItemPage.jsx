import React from 'react';
import {Typography} from "@material-ui/core";

import AppContainer from "../../components/common/AppContainer/AppContainer";
import useGetDoc from "../../hooks/useGetDoc";
import {firestoreCollections} from "../../utils/consts";
import AppContainerItem from "../../components/common/AppContainer/AppContainerItem";
import TextContainer from "../../components/common/AppContainer/TextContainer";


const NewsItemPage = ({newsItemId}) => {
    const hewsItem = useGetDoc(firestoreCollections.news, newsItemId)

    return (
        <div>
            {newsItemId === null ?
                <Typography style={{margin: '50px'}} align={"center"} variant={'h4'} color={'error'}>
                    Элемент не найден
                </Typography>:
                hewsItem && <AppContainer withoutTitle>
                    <AppContainerItem column lg={12} md={12} sm={12} xs={12}>
                        <TextContainer>
                            <div>
                                <img src={hewsItem.imageURL}/>
                            </div>
                            <div>
                                <Typography variant={'h6'}>
                                    {hewsItem.date}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant={'h4'} color={'error'}>
                                    {hewsItem.title}
                                </Typography>
                            </div>
                            <div>
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