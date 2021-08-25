import React from 'react';

import MyCarousel from "../../../components/Carousel/Carousel";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
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

    return (
        <div>
            <MyCarousel {...props}>
                {children.map(img => <div className={styles.slide} key={img}>
                    <img src={img}/>
                </div>)}
            </MyCarousel>
        </div>
    );
};

export default HouseItemCarousel;