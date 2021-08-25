import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";

import {splitArray} from "../../utils/helpers";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import HouseItem from "../common/HousesItems/HouseItem";
import MyCarousel from "../Carousel/Carousel";
import MyButton from "../common/Button/MyButton";
import {Route} from "../../AppRouter/consts";


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

const HousesMiniDesktop = ({houses}) => {
    const history = useHistory()

    const splitHouses = splitArray(houses.slice(0, 12), 3)

    return (
        <AppContainerItem column lg={12} md={12} sm={12} xs={12}>
            <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                <MyButton style={{position: 'absolute', top: '-60px'}} action={() => history.push(Route())}>
                    Все проекты
                </MyButton>
            </div>
            <MyCarousel showThumbs={false} showIndicators={true}>
                {/*<div style={{width: '50px', backgroundColor: 'transparent'}}/>*/}
                {splitHouses.map(houseGroup => <HouseGroupSlide key={houseGroup[0].title} houseGroup={houseGroup}/>)}
                {/*<div style={{width: '50px', backgroundColor: 'transparent'}}/>*/}
            </MyCarousel>
        </AppContainerItem>
    );
};

export default HousesMiniDesktop;
