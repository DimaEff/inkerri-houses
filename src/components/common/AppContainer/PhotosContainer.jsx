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

const PhotosContainer = ({children, content, afterPhotos, ...props}) => {
    const styles = useStyles();

    const breakpointColumnsObjDefault = {
        default: 3,
        960: 2,
        500: 1,
    };

    return (
        <Grid className={styles.root} container>
            {children}
            <Container maxWidth={'lg'}>
                <ImageContainer breakpointColumnsObj={breakpointColumnsObjDefault} {...props}>
                    {content}
                </ImageContainer>
            </Container>
            {afterPhotos}
        </Grid>
    );
};

export default PhotosContainer;