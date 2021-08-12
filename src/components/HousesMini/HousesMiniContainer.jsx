import React from 'react';
import {connect} from "react-redux";

import {getStateHouses} from "../../selectors/house_selectors";
import HousesMiniDesktop from "./HousesMiniDesktop";
import useResolution from "../../hooks/useResolution";
import HousesMiniMobile from "./HousesMiniMobile";
import AppContainer from "../common/AppContainer/AppContainer";


const HousesMiniContainer = ({houses}) => {
    const {isMobile} = useResolution();


    return (
        <AppContainer title={'Каким будет ваш будущий дом?'}>
            {
                isMobile ?
                    <HousesMiniMobile houses={houses}/>:
                    <HousesMiniDesktop houses={houses}/>
            }
        </AppContainer>
    );
};

const mapStateToProps = (state) => ({
    houses: getStateHouses(state),
})

export default connect(mapStateToProps, null)(HousesMiniContainer);
