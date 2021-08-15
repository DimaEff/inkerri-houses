import React from 'react';
import {makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";

import logoImg from '../../../assets/Header/logo.svg';
import NavigationMenuContainer from "./NavigationMenu/NavigationMenuContainer";
import appRoutes from "../../../AppRouter/routes";
import {getHomeRoute} from "../../../AppRouter/consts";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        minWidth: '100%',
    },
    logo: {
        width: '11vw',
        minWidth: '70px',
        marginRight: '15px',

        '& img': {
            maxHeight: '100%',
            maxWidth: '100%',
        }
    }
}))

const Navigation = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.logo}>
                <NavLink to={getHomeRoute()}>
                    <img src={logoImg}/>
                </NavLink>
            </div>
            <NavigationMenuContainer paths={appRoutes}/>
        </div>
    );
};

export default Navigation;