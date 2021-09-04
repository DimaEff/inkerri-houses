import React from 'react';

import MyCarousel from "../../../components/Carousel/Carousel";
import {makeStyles} from "@material-ui/core";
import useResolution from "../../../hooks/useResolution";
import SingleImageContainer from "../../../components/common/AppContainer/SingleImageContainer";


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: '20px',
    },
    slide: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& img': {
            width: '100%',
        }
    }
}))

const HouseItemCarousel = ({children, ...props}) => {
    const styles = useStyles();

    const {isMobile} = useResolution();

    return (
        <div className={styles.root}>
            <MyCarousel showThumbs={!isMobile} {...props}>
                {children.map(img => <SingleImageContainer key={img}>
                    <img src={img}/>
                </SingleImageContainer>)}
            </MyCarousel>
        </div>
    );
};

export default HouseItemCarousel;