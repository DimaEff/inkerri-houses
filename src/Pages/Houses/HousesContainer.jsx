import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import {getHouses} from "../../store/housesReducer";
import {getStateHouses} from "../../selectors/house_selectors";
import Houses from "./Houses";


const HousesContainer = ({houses, getHouses}) => {
    // useEffect(() => {
    //     getHouses()
    // }, [getHouses]);

    const {houseId} = useParams();


    return <Houses houses={houses}/>;
};

const mapStateToProps = (state) => ({
    houses: getStateHouses(state),
})

export default connect(mapStateToProps, {getHouses})(HousesContainer);
