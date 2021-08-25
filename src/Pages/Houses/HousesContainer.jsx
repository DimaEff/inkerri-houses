import React from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import {setFilterHousesValues} from "../../store/housesReducer";
import {getFilterHouses, getPrices, getSquares} from "../../selectors/house_selectors";
import Houses from "./Houses";
import HouseItemPage from "./HouseItemPage/HouseItemPage";


const HousesContainer = (props) => {
    const {houseId} = useParams();

    if (houseId) return <HouseItemPage houseId={houseId}/>

    return <Houses {...props}/>;
};

const mapStateToProps = (state) => ({
    prices: getPrices(state),
    squares: getSquares(state),
    filteredHouses: getFilterHouses(state),
})

export default connect(mapStateToProps, {setFilterHousesValues})(HousesContainer);
