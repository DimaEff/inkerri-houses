import React from 'react';

import NavText from "../../../common/Text/NavText";
import {makeStyles, Typography} from "@material-ui/core";
import searchIcon from "../../../../assets/Header/searchIcon.svg";
import InstagramContact from "../../../common/Contacts/InstagramContact";
import SearchContainer from "../../../common/Search/SearchContainer";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    },
    menu: {
        display: 'flex',
        marginRight: '60px',

        '& div': {
            marginRight: '20px',
        }
    },
    contacts: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

        '& div': {
            marginRight: '20px',
        }
    },
}))

const NavigationMenuDesktop = ({paths}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.menu}>
                {
                    paths.map(({name, path, menuPath}) => <NavText key={path} path={path} menuPath={menuPath}>
                        {name}
                    </NavText>)
                }
            </div>
            <div className={styles.contacts}>
                <SearchContainer/>
                <InstagramContact/>
                <Typography style={{height: '110%'}} color={'secondary'}>
                    +7 (931) 308-57-59
                </Typography>
            </div>
        </div>
    );
};

export default NavigationMenuDesktop;