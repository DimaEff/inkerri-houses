import React from 'react';
import {useHistory} from "react-router-dom";

import {splitArray} from "../../utils/helpers";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import MyCarousel from "../Carousel/Carousel";
import MyButton from "../common/Button/MyButton";
import {HouseRoute} from "../../AppRouter/consts";
import HouseGroupSlide from "./HousesGroupSlider";


const HousesMiniDesktop = ({houses}) => {
    const history = useHistory()

    const splitHouses = splitArray(houses.slice(0, 12), 3)

    return (
        <AppContainerItem column lg={12} md={12} sm={12} xs={12}>
            <div style={{position: 'relative', display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                <MyButton style={{position: 'absolute', top: '-60px'}} action={() => history.push(HouseRoute())}>
                    Все проекты
                </MyButton>
            </div>
            <MyCarousel showThumbs={false} showIndicators={true}>
                {splitHouses.map(houseGroup => <HouseGroupSlide key={houseGroup[0].title} houseGroup={houseGroup}/>)}
            </MyCarousel>
        </AppContainerItem>
    );
};

export default HousesMiniDesktop;
