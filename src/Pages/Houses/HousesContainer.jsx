import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useHistory, useParams} from "react-router-dom";

import {getHouses} from "../../store/housesReducer";
import {getPrices, getSquares, getStateHouses} from "../../selectors/house_selectors";
import Houses from "./Houses";
import HouseItemPage from "./HouseItemPage/HouseItemPage";
import {getHousesRoute} from "../../AppRouter/consts";


const HousesContainer = ({houses, prices, squares, getHouses}) => {
    // useEffect(() => {
    //     getHouses()
    // }, [getHouses]);

    const {houseId} = useParams();
    const history = useHistory();

    useEffect(() => {
        if (houseId === ':houseId') history.push(getHousesRoute())
    })

    if (houseId) return <HouseItemPage houseId={houseId}/>

    return <Houses houses={houses} prices={prices} squares={squares}/>;
};

const mapStateToProps = (state) => ({
    houses: getStateHouses(state),
    prices: getPrices(state),
    squares: getSquares(state),
})

export default connect(mapStateToProps, {getHouses})(HousesContainer);
