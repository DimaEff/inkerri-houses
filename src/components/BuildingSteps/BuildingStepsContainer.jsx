import React from 'react';

import AppContainer from "../common/AppContainer/AppContainer";
import BuildingStepsDesktop from "./BuildingStepsDesktop";


const BuildingStepsContainer = ({grey}) => {
    return (
        <div>
            <AppContainer title={'Этапы строительства'} grey={grey} lg={12} md={12} sm={12} xs={12}>
                <BuildingStepsDesktop />
            </AppContainer>
        </div>
    );
};

export default BuildingStepsContainer;