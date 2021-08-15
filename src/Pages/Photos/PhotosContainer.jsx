import React, {useState} from 'react';
import {connect} from "react-redux";

import Photos from "./Photos";
import {getStateHouses} from "../../selectors/house_selectors";
import Footer from "../../components/Footer/Footer";


const PhotosContainer = ({houses}) => {
    const pageSize = 6;
    const pagesCount = Math.ceil(houses.length / pageSize);
    const [currentPage, setCurrentPage] = useState(1);

    let photos = [];
    houses && houses.slice(0, currentPage * pageSize).forEach(house => photos = [...photos, ...house.imagesURL]);

    return <div>
        <Photos photos={photos} currentPage={currentPage} pagesCount={pagesCount} setCurrentPage={setCurrentPage}/>
        <Footer />
    </div>;
};

const mapStateToProps = (state) => ({
    houses: getStateHouses(state),
})

export default connect(mapStateToProps, {})(PhotosContainer);