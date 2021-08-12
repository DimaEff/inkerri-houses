import React from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import {getHouses} from "../../store/housesReducer";
import {getPrices, getSquares, getStateHouses} from "../../selectors/house_selectors";
import Houses from "./Houses";
import HouseItemPage from "./HouseItemPage/HouseItemPage";


const HousesContainer = ({houses, prices, squares, getHouses}) => {
    const {houseId} = useParams();

    if (houseId) return <HouseItemPage houseId={houseId}/>

    return <Houses houses={houses} prices={prices} squares={squares}/>;
};

const mapStateToProps = (state) => ({
    houses: getStateHouses(state),
    prices: getPrices(state),
    squares: getSquares(state),
})

export default connect(mapStateToProps, {getHouses})(HousesContainer);
