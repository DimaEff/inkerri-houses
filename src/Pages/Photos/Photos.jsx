import React from 'react';

import PhotosContainer from "../../components/common/AppContainer/PhotosContainer";
import Navigation from "../../components/Header/NavBar/Navigation";
import {Button, Typography} from "@material-ui/core";


const Photos = ({photos, currentPage, pagesCount, setCurrentPage}) => {

    const paginateButton = pagesCount === currentPage ?
        <Typography color={'secondary'}>Это все фото</Typography>:
        <Button color={'secondary'} variant={'outlined'} onClick={() => setCurrentPage(page => page + 1)}>
            Еще фото
        </Button>

    return <PhotosContainer photos={photos} afterPhotos={paginateButton}>
        <div style={{position: 'relative', display: 'flex', justifyContent: 'space-around', minWidth: '280px'}}>
            <Navigation />
        </div>
    </PhotosContainer>;
};

export default Photos;