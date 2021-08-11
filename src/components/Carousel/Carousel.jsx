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
        zIndex: 2,
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        right: arrow === '>' && '0px',
        left: arrow === '<' && '0px',

        display: 'flex',
        alignItems: 'center',

        margin: '5px',
        cursor: 'pointer',

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
                {...props}
            >
                {children}
            </Carousel>
        </div>
    );
};

export default MyCarousel;