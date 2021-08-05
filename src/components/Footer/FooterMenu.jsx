import React from 'react';
import {makeStyles} from "@material-ui/core";
import MenuMini from "./MenuMini";
import InstagramContact from "../common/Contacts/InstagramContact";
import {paths} from "../../utils/consts";
import FooterText from "../common/Text/FooterText";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginLeft: '30px'
    },
    menuMini: {
        width: '150px',
        marginRight: '10px'
    }
}))

const FooterMenu = () => {
    const styles = useStyles();

    const testPaths = [
        {name: 'Скандинавские дома', path: '#houses'},
        {name: 'Проектирование', path: '#progects'},
        {name: 'Консультации', path: '#cons'},
    ]

    return (
        <div className={styles.root}>
            <div className={styles.menuMini}>
                <FooterText>
                    Услуги:
                </FooterText>
                <MenuMini paths={testPaths}/>
                <InstagramContact color={'#B72A27'} />
            </div>
            <div className={styles.menuMini}>
                <FooterText>
                    Меню:
                </FooterText>
                <MenuMini paths={paths}/>
            </div>
        </div>
    );
};

export default FooterMenu;