import React from 'react';
import {makeStyles} from "@material-ui/core";
import {connect} from "react-redux";

import NavBar from "./NavBar/NavBar";
import Carousel from "./Carousel";
import {displaySize} from "../../utils/consts";
import {getBanners} from "../../selectors/banners_selectors";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
    },
    img: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        minHeight: '45.8vw',

        [theme.breakpoints.down(displaySize)]: {
            minHeight: '365px',
            width: '100%',
            minWidth: '750px'
        },

        '& img': {
            position: 'absolute',
            minHeight: '365px',
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

const Header = ({banners}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.navBar}>
                <NavBar />
            </div>
            <Carousel>
                {banners?.map(({id, imagesURL}) => <Img key={id} img={imagesURL[0]}/>)}
            </Carousel>
        </div>
    );
};

const mapStateToProps = (state) => ({
    banners: getBanners(state),
})

export default connect(mapStateToProps, {})(Header);