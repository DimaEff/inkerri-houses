import React from 'react';
import {makeStyles} from "@material-ui/core";

import MenuMini from "./MenuMini";
import InstagramContact from "../common/Contacts/InstagramContact";
import FooterText from "../common/Text/FooterText";
import WhatsAppContact from "../common/Contacts/WhatsAppContact";
import appRoutes from "../../AppRouter/routes";


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
    },
    contacts: {
        display: 'flex',

        '& div': {
            marginRight: '15px'
        }
    }
}))

const FooterMenu = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.menuMini}>
                <FooterText>
                    Услуги:
                </FooterText>
                <MenuMini menuNum={2} paths={appRoutes}/>
                <div className={styles.contacts}>
                    <InstagramContact color={'#B72A27'} />
                    <WhatsAppContact color={'#B72A27'} />
                </div>
            </div>
            <div className={styles.menuMini}>
                <FooterText>
                    Меню:
                </FooterText>
                <MenuMini menuNum={1} paths={appRoutes}/>
            </div>
        </div>
    );
};

export default FooterMenu;