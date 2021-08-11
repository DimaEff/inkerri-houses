import React from 'react';
import {Grid} from "@material-ui/core";

import {splitArray} from "../utils/helpers";
import AppContainer from "../components/common/AppContainer/AppContainer";
import AppContainerItem from "../components/common/AppContainer/AppContainerItem";
import HouseItem from "../components/common/HousesItems/HouseItem";
import MyCarousel from "../components/Carousel/Carousel";


const HouseGroupSlide = ({houseGroup}) => {
    return (
        <Grid style={{padding: '0px 20px'}} container>
            {
                houseGroup.map(houseItem => <AppContainerItem key={houseItem.title} margin lg={4} md={4} sm={4} xs={4}>
                    <HouseItem variant={'secondary'} houseItem={houseItem} shadow/>
                </AppContainerItem>
            )}
        </Grid>
    )
};

const HousesMini = ({houses}) => {
    const splitHouses = splitArray(houses.slice(0, 12), 3)

    return (
        <AppContainer title={'Каким будет ваш будущий дом?'}>
            <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                <MyCarousel showThumbs={false} showIndicators={true}>
                    {splitHouses.map(houseGroup => <HouseGroupSlide key={houseGroup[0].title} houseGroup={houseGroup}/>)}
                </MyCarousel>
            </AppContainerItem>
        </AppContainer>
    );
};

export default HousesMini;
