import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";

import PhotosContainer from "../../components/common/AppContainer/PhotosContainer";
import Navigation from "../../components/Header/NavBar/Navigation";
import AlbumItem from "../../components/common/AlbumItem/AlbumItem";


const useStyles = makeStyles(theme => ({
    nav: {
        position: 'relative',

        display: 'flex',
        justifyContent: 'space-around',

        minWidth: '280px',
    }
}));

const Photos = ({photos, albums, currentPage, pagesCount, viewAlbum, setCurrentPage}) => {
    const styles = useStyles();

    const paginateButton = viewAlbum || (pagesCount === currentPage ?
        <Typography color={'secondary'}>Это все фото</Typography> :
        <Button color={'secondary'} variant={'outlined'} onClick={() => setCurrentPage(page => page + 1)}>
            Еще фото
        </Button>);

    const albumsItems = albums.map(album => <AlbumItem key={album.id} album={album}/>)

    return (
        <div>
            <PhotosContainer content={albumsItems} readyChildren>
                <div className={styles.nav}>
                    <Navigation/>
                </div>
            </PhotosContainer>
            <PhotosContainer content={photos} afterPhotos={paginateButton}/>
        </div>
    );
};

export default Photos;