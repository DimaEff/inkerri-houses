import React from 'react';
import {makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";

import logoImg from '../../../assets/Header/logo.svg';
import NavigationMenuContainer from "./NavigationMenu/NavigationMenuContainer";
import appRoutes from "../../../AppRouter/routes";


const useStytles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'flex-end',
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
    const styles = useStytles();

    return (
        <div className={styles.root}>
            <div className={styles.logo}>
                <NavLink to={'#home'}>
                    <img src={logoImg}/>
                </NavLink>
            </div>
            <NavigationMenuContainer paths={appRoutes}/>
        </div>
    );
};

export default Navigation;