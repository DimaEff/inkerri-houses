import React from 'react';

import AppContainer from "../../components/common/AppContainer/AppContainer";
import AppContainerItem from "../../components/common/AppContainer/AppContainerItem";
import HouseItem from "../../components/common/HousesItems/HouseItem";


const Houses = ({houses}) => {
    return (
        <AppContainer jC={'flex-start'} title={'Проекты домов'}>
            фильтр
            {houses.map(house => <AppContainerItem lg={4} md={4} sm={6} xs={12}>
                <HouseItem shadow houseItem={house}/>
            </AppContainerItem>)}
        </AppContainer>
    );
};

export default Houses;