import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {makeStyles} from "@material-ui/core";

import {displaySize} from "../../utils/consts";


const useStyles = makeStyles(theme => ({
    indicator: isSelected => ({
        zIndex: 2,
        display: 'inline-block',
        width: '10%',
        maxWidth: '75px',
        height: '5px',
        marginBottom: '30px',

        backgroundColor: isSelected ? '#B72A27' : '#FFF',

        [theme.breakpoints.down(displaySize)]: {
            height: '4px',
            marginBottom: '10px',
        },
    }),
}))

const Indicator = ({isSelected}) => {
    const styles = useStyles(isSelected);

    return <li className={styles.indicator}/>
}

const HeaderCarousel = ({children, ...props}) => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={4000}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            renderIndicator={(clickHandler, isSelected) => <Indicator isSelected={isSelected}/>}
            style={{width: '100vw'}}
            {...props}
        >
            {children}
        </Carousel>
    );
};

export default HeaderCarousel;