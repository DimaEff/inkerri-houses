import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

import {getPhotosAlbumRoute} from "../../../AppRouter/consts";
import SingleImageContainer from "../AppContainer/SingleImageContainer";


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',

        height: '300px',
        cursor: 'pointer',
    },
    img: {
        width: '100%',
    },
    info: {
        position: 'absolute',
        top: 0,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .3)'
    }
}))

const AlbumItem = ({album}) => {
    const styles = useStyles();

    const history = useHistory();

    return (
        <div className={styles.root}>
            <SingleImageContainer>
                <img src={album.imagesURL[0]} className={styles.img}/>
            </SingleImageContainer>
            <div className={styles.info} onClick={() => history.push(getPhotosAlbumRoute(album.id))}>
                <Typography color={'secondary'} variant={'h5'}>
                    {album.name}
                </Typography>
            </div>
        </div>
    );
};

export default AlbumItem;
