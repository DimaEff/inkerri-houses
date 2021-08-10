import React, {useState} from 'react';

import AppContainer from "../../components/common/AppContainer/AppContainer";
import AppContainerItem from "../../components/common/AppContainer/AppContainerItem";
import HouseItem from "../../components/common/HousesItems/HouseItem";
import Filter from "../../components/common/HousesItems/Filter/Filter";
import FloorsFilter from "../../components/common/HousesItems/Filter/FloorsFilter";
import {Grid} from "@material-ui/core";


const Houses = ({houses, prices, squares}) => {
    const [floors, setFloors] = useState('all');

    return (
        <AppContainer jC={'flex-start'} title={'Проекты домов'}>
            <AppContainerItem margin lg={12} md={12} sm={12} xs={12}>
                <FloorsFilter floors={floors} setFloors={setFloors}/>
            </AppContainerItem>
            <AppContainerItem lg={3} md={3} sm={12} xs={12}>
                <Filter prices={prices} squares={squares} floors={floors} setFloors={setFloors}/>
            </AppContainerItem>
            <AppContainerItem lg={9} md={9} sm={12} xs={12}>
                <Grid container>
                    {houses.map(house => <AppContainerItem jC={'flex-start'} aI={'flex-start'} key={house.title} lg={4} md={4} sm={6} xs={12}>
                        <HouseItem shadow houseItem={house}/>
                    </AppContainerItem>)}
                </Grid>
            </AppContainerItem>
        </AppContainer>
    );
};

export default Houses;