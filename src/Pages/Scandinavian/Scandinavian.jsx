import React from 'react';

import HowBuild from "../../components/HowBuild/HowBuild";
import WhyScandinavian from "../../components/WhyScandinavian/WhyScandinavian";
import PhotosContainer from "../../components/common/AppContainer/PhotosContainer";
import BuildingSteps from "../../components/BuildingSteps/BuildingSteps";
import BuildingStepsContainer from "../../components/BuildingSteps/BuildingStepsContainer";


const Scandinavian = ({photos}) => {
    return (
        <div>
            <HowBuild grey/>
            {/*<BuildingStepsContainer />*/}
            <BuildingSteps />
            <WhyScandinavian grey/>
            <PhotosContainer content={photos}/>
        </div>
    );
};

export default Scandinavian;