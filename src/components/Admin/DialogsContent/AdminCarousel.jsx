import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {makeStyles} from "@material-ui/core";
import {ArrowForwardIos, ArrowBackIos} from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {
        '& .slide': {
            margin: '30px 0px',
        }
    },
    indicator: ({isSelected}) => ({
        zIndex: 2,
        display: 'inline-block',
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        marginRight: '10px',

        backgroundColor: isSelected ? '#B72A27' : '#5c5c5c',
    }),
    arrow: ({arrow}) => ({
        zIndex: 2,
        position: 'absolute',
        top: '50%',
        bottom: '0px',
        right: arrow === '>' && '0px',
        left: arrow === '<' && '0px',

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

const Arrow = ({clickHandler, arrow}) => {
    const styles = useStyles({arrow});

    return <div className={styles.arrow} onClick={clickHandler}>
        {arrow === '>' && <ArrowForwardIos />}
        {arrow === '<' && <ArrowBackIos />}
    </div>
}

const Indicator = ({isSelected}) => {
    const styles = useStyles({isSelected});

    return <li className={styles.indicator}/>
}

const AdminCarousel = ({children}) => {
    const styles = useStyles();

    return (
        <Carousel
            className={styles.root}
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={clickHandler => <Arrow clickHandler={clickHandler} arrow={'<'}/>}
            renderArrowNext={clickHandler => <Arrow clickHandler={clickHandler} arrow={'>'}/>}
            renderIndicator={(clickHandler, isSelected) => <Indicator isSelected={isSelected}/>}
        >
            {children}
        </Carousel>
    );
};

export default AdminCarousel;