import React from 'react';
import {connect} from "react-redux";

import {getStateHouses} from "../selectors/house_selectors";
import HousesMini from "./HousesMini";


const HousesMiniContainer = ({houses}) => {

    return <HousesMini houses={houses}/>;
};

const mapStateToProps = (state) => ({
    houses: getStateHouses(state),
})

export default connect(mapStateToProps, null)(HousesMiniContainer);
