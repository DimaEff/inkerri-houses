import React from 'react';

import PhotosContainer from "../../components/common/AppContainer/PhotosContainer";
import Navigation from "../../components/Header/NavBar/Navigation";
import {Button, Typography} from "@material-ui/core";


const Photos = ({photos, currentPage, pagesCount, setCurrentPage}) => {

    const paginateButton = pagesCount === currentPage ?
        <Typography>Это все фото</Typography>:
        <Button color={'secondary'} variant={'outlined'} onClick={() => setCurrentPage(page => page + 1)}>
            Еще фото
        </Button>

    return <PhotosContainer photos={photos} afterPhotos={paginateButton}>
        <div style={{width: '100%', textAlign: 'center'}}>
            <Navigation />

        </div>
    </PhotosContainer>;
};

export default Photos;