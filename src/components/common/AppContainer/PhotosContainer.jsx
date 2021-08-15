import React from 'react';
import {Container, Grid, makeStyles} from "@material-ui/core";

import ImageContainer from "./ImageContainer";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',

        padding: '30px',
        backgroundColor: '#3E3E3E'
    }
}))

const PhotosContainer = ({children, photos, afterPhotos}) => {
    const styles = useStyles();

    const breakpointColumnsObjDefault = {
        default: 3,
        600: 2,
    };

    return (
        <Grid className={styles.root} container>
            <Container maxWidth={'lg'}>
                {children}
                <ImageContainer breakpointColumnsObj={breakpointColumnsObjDefault}>
                    {photos}
                </ImageContainer>
            </Container>
            {afterPhotos}
        </Grid>
    );
};

export default PhotosContainer;