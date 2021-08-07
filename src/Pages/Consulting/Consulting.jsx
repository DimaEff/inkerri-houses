import React from 'react';

import ConsultingConstruction from "../../components/ConsultingConstruction/ConsultingConstruction";
import Advantages from "../../components/Advantages/Advantages";
import NeedHelp from "../../components/NeedHelp/NeedHelp";


const Consulting = () => {
    return (
        <div>
            <ConsultingConstruction/>
            <Advantages grey/>
            <NeedHelp />
        </div>
    );
};

export default Consulting;