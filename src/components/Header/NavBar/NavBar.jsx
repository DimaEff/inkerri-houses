import React from 'react';
import {makeStyles} from "@material-ui/core";

import Navigation from "./Navigation";
import {displaySize} from "../../../utils/consts";
import NavTitle from "./NavTitle";
import MyButton from "../../common/Button/MyButton";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
        width: '61%',
        minWidth: '950px',

        [theme.breakpoints.down(displaySize)]: {
            width: '90%',
            minWidth: '0px',
        },
    },
    navigate: {
        position: 'relative',
        top: '30px',
        marginTop: '10px',

        [theme.breakpoints.down(displaySize)]: {
            top: '15px',
        },
    },
    navTitle: {
        position: 'relative',
        top: '40%',
        maxWidth: '100%',

        [theme.breakpoints.down(displaySize)]: {
            top: '30%',
        },
    },
    button: {
        position: 'relative',
        bottom: '-60%',

        [theme.breakpoints.down("md")]: {
            bottom: '-50%',
        },

        [theme.breakpoints.down(displaySize)]: {
            bottom: '-40%',
        },
    }
}))

const NavBar = () => {
    const styles = useStyles();


    return (
        <div className={styles.root}>
            <div className={styles.navigate}>
                <Navigation/>
            </div>
            <div className={styles.navTitle}>

                <NavTitle title={'Лучшее будущее для вашей семьи'}>
                    {[
                        {text: 'Надежность', color: '#B72A27'},
                        {text: 'Качество', color: '#91C500'},
                        {text: 'Гарантия результата', color: '#FF9900'},
                    ]}
                </NavTitle>
            </div>
            <div className={styles.button}>
                <a href={"#help"}>
                    <MyButton>
                        Заказать звонок
                    </MyButton>
                </a>
            </div>
        </div>
    );
};

export default NavBar;