import React from 'react';

import ModernHousesDesign from "../../components/ModernHousesDesign/ModernHousesDesign";
import Economy from "../../components/Economy/Economy";
import DesigningSteps from "../../components/DesigningSteps/DesigningSteps";
import Drawings from "../../components/Drawings/Drawings";


const Designing = () => {
    return (
        <div>
            <ModernHousesDesign />
            <Economy grey/>
            <DesigningSteps/>
            <Drawings />
        </div>
    );
};

export default Designing;