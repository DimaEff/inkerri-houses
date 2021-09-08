import React from 'react';
import {Grid} from "@material-ui/core";

import AppContainerItem from "../common/AppContainer/AppContainerItem";
import HouseItem from "../common/HousesItems/HouseItem";


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

export default HouseGroupSlide;
