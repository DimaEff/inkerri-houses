import React from 'react';
import {connect} from "react-redux";

import Scandinavian from "./Scandinavian";
import {getStateHouses} from "../../selectors/house_selectors";


const ScandinavianContainer = ({houses}) => {
    let photos = [];
    houses && houses.slice(0, 4).forEach(house => photos = [...photos, ...house.imagesURL]);

    return <Scandinavian photos={photos}/>;
};

const mapStateToProps = (state) => ({
    houses: getStateHouses(state),
})

export default connect(mapStateToProps, {})(ScandinavianContainer);