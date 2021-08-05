import React from 'react';
import Carousel from "../Carousel/Carousel";
import {makeStyles} from "@material-ui/core";

import {displaySize} from "../../utils/consts";
import NavBar from "./NavBar/NavBar";
import house1Img from '../../assets/Header/house1.png';
import house2Img from '../../assets/Header/house2.png';
import house3Img from '../../assets/Header/house3.png';
import house4Img from '../../assets/Header/house4.png';
import house5Img from '../../assets/Header/house5.png';



const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        minWidth: '100vw',
        overflow: 'hidden',
    },
    img: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: '45.8vw',
        width: '100vw',

        [theme.breakpoints.down(displaySize)]: {
            minHeight: '365px',
            width: '100%',
            minWidth: '750px'
        },

        '& img': {
            position: 'absolute',
            width: '100vw',
            height: '100%',
            minHeight: '365px',
            maxHeight: '45.8vw',
        }
    },
    navBar: {
        zIndex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',

        display: 'flex',
        justifyContent: 'center',

        backgroundColor: 'rgba(0, 0, 0, .35)',
    }
}))

const Img = ({img}) => {
    const styles = useStyles();

    return <div className={styles.img}>
        <img src={img}/>
    </div>
}

const Header = () => {
    const styles = useStyles();

    const imgs = [
        {name: 'house1Img', img: house1Img},
        {name: 'house2Img', img: house2Img},
        {name: 'house3Img', img: house3Img},
        {name: 'house4Img', img: house4Img},
        {name: 'house5Img', img: house5Img},
    ]

    return (
        <div className={styles.root}>
            <div className={styles.navBar}>
                <NavBar />
            </div>
            <Carousel>
                {imgs.map(({name, img}) => <Img key={name} img={img}/>)}
            </Carousel>
        </div>
    );
};

export default Header;