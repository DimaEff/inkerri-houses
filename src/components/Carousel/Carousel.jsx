import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {makeStyles} from "@material-ui/core";

import nextArrowIcon from '../../assets/nextArrow.svg';
import prevArrowIcon from '../../assets/prevArrow.svg';
import {displaySize} from "../../utils/consts";


const useStyles = makeStyles(theme => ({
    root: ({h, w}) => ({
        height: h || 'auto',
        width: w || 'auto',
    }),
    carousel: {
        position: 'relative',
        left: '-5%',
        // padding: '30px',
        // margin: '30px',
        width: '110%',

        '&>div': {
            // left: '-9%',
            padding: '0px 40px',
            margin: '30px',
            // width: '120%',
            // maxWidth: '120%',
        }
    },
    indicator: ({isSelected}) => ({
        zIndex: 2,
        display: 'inline-block',
        width: '10%',
        maxWidth: '75px',
        height: '5px',
        marginBottom: '-10px',

        backgroundColor: isSelected ? '#B72A27' : '#E3E3E3',

        [theme.breakpoints.down(displaySize)]: {
            height: '4px',
        },
    }),
    arrow: ({arrow}) => ({
        zIndex: 10,
        position: 'absolute',
        top: '50%',
        bottom: '0px',
        right: arrow === '>' && '-10px',
        left: arrow === '<' && '-10px',

        height: '20px',
        width: '20px',
        display: 'flex',
        alignItems: 'center',

        margin: '5px',
        cursor: 'pointer',
        backgroundColor: 'transparent',

        '& img': {
            height: '20px',
        }
    })
}))

const Indicator = ({isSelected}) => {
    const styles = useStyles({isSelected});

    return <li className={styles.indicator}/>
}

const Arrow = ({clickHandler, arrow}) => {
    const styles = useStyles({arrow});

    return <div className={styles.arrow} onClick={clickHandler}>
        {arrow === '>' && <img src={nextArrowIcon}/>}
        {arrow === '<' && <img src={prevArrowIcon}/>}
    </div>
}

const MyCarousel = ({children, h, w, ...props}) => {
    const styles = useStyles({h});

    return (
        <div className={styles.root}>
            <Carousel
                renderIndicator={(clickHandler, isSelected) => <Indicator isSelected={isSelected}/>}
                renderArrowNext={clickHandler => <Arrow arrow={'>'} clickHandler={clickHandler}/>}
                renderArrowPrev={clickHandler => <Arrow arrow={'<'} clickHandler={clickHandler}/>}
                showIndicators={false}
                showStatus={false}
                className={styles.carousel}
                {...props}
            >
                {children}
            </Carousel>
        </div>
    );
};

export default MyCarousel;