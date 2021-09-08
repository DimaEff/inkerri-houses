import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import Photos from "./Photos";
import {getHouses} from "../../selectors/house_selectors";
import {getAlbums} from "../../selectors/albums_selectors";
import {useParams} from "react-router-dom";


const PhotosContainer = ({houses, albums}) => {
    const {albumId} = useParams();

    const pageSize = 4;
    const pagesCount = Math.ceil(houses.length / pageSize);
    const [currentPage, setCurrentPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [viewAlbum, setViewAlbum] = useState(false);
    const [prevPage, setPrevPage] = useState(0);

    useEffect(() => {
        if (houses.length > 0 && !albumId && prevPage < currentPage) {
            setPrevPage(currentPage);
            setViewAlbum(false);
            houses.slice((currentPage - 1) * pageSize, currentPage * pageSize)
                .forEach(house => setPhotos(photos => [...photos, ...house.imagesURL]));
        }
    }, [albumId, currentPage, houses, prevPage]);
    
    useEffect(() => {
        if (albumId) {
            setViewAlbum(true);
            const albumPhotos = albums?.find(album => album.id === albumId)?.imagesURL;
            setPhotos(albumPhotos);
        }
    }, [albumId, albums])

    return <Photos photos={photos}
                   albums={albums}
                   currentPage={currentPage}
                   pagesCount={pagesCount}
                   viewAlbum={viewAlbum}
                   setCurrentPage={setCurrentPage}
    />
};

const mapStateToProps = (state) => ({
    houses: getHouses(state),
    albums: getAlbums(state),
})

export default connect(mapStateToProps, {})(PhotosContainer);