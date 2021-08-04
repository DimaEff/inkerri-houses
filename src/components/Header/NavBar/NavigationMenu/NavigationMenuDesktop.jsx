import React from 'react';

import NavText from "../../../common/Text/NavText";
import {makeStyles, Typography} from "@material-ui/core";
import searchIcon from "../../../../assets/Header/searchIcon.svg";
import InstagramContact from "../../../common/Contacts/InstagramContact";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    },
    menu: {
        display: 'flex',

        '& div': {
            marginRight: '30px',
        }
    },
    contacts: {
        display: 'flex',
        justifyContent: 'flex-end',

        '& div': {
            marginRight: '30px',
        }
    },
}))

const NavigationMenuDesktop = ({paths}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.menu}>
                {
                    paths.map(({name, path}) => <NavText key={path} path={path}>
                        {name}
                    </NavText>)
                }
            </div>
            <div className={styles.contacts}>
                <div>
                    <img src={searchIcon}/>
                </div>
                <InstagramContact />
                <div>
                    <Typography color={'secondary'}>
                        +7 (931) 308-57-59
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenuDesktop;