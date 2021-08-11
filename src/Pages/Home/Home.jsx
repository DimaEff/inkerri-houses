import React from 'react';

import HowBuild from "../../components/HowBuild/HowBuild";
import WeDo from "../../components/WeDo/WeDo";
import WhyWe from "../../components/WhyWe/WhyWe";
import NeedHelp from "../../components/NeedHelp/NeedHelp";
import NewsMini from "../../components/NewsMini/NewsMini";
import HousesMiniContainer from "../../HousesMini/HousesMiniContainer";


const Home = () => {
    return (
        <div>
            <HowBuild grey/>
            <WeDo />
            <WhyWe grey/>
            <HousesMiniContainer />
            <NeedHelp grey/>
            <NewsMini />
        </div>
    );
};

export default Home;