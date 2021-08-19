import React from 'react';
import {Button, makeStyles, Menu, MenuItem, Typography} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";
import InstagramContact from "../../../common/Contacts/InstagramContact";
import WhatsAppContact from "../../../common/Contacts/WhatsAppContact";
import TelegramContact from "../../../common/Contacts/TelegramContact";
import closeIcon from '../../../../assets/closeIcon.svg';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        right: '-10px',
        top: '5px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '65vw',
    },
    menu: {
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '15px',
        right: '15px',
    },
    link: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    item: {
        color: 'rgba(62, 62, 62, 0.62)',
        fontWeight: 500,
    },
    contact: {
        display: 'flex',
        margin: '10px',

        '& > div': {
            marginRight: '13px',
        }
    }
}))

const NavigationMenuMobile = ({paths}) => {
    const styles = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.root}>
            <div >
                <Typography color={'secondary'}>
                    +7 (931) 308-57-59
                </Typography>
            </div>
            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon color={'secondary'}/>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    variant={'menu'}
                    className={styles.menu}
                >
                    <div onClick={handleClose} className={styles.closeButton}>
                        <img src={closeIcon}/>
                    </div>
                    {
                        paths.map(({name, menuPath, path}) => {
                            return (
                                <MenuItem key={name} onClick={handleClose} style={{position: 'relative'}}>
                                    <NavLink to={menuPath || path} className={styles.link}/>
                                    <div className={styles.item}>
                                        {name}
                                    </div>
                                </MenuItem>
                            )
                        })
                    }
                    <div className={styles.contact}>
                        <InstagramContact color={'#DB4D30'}/>
                        <WhatsAppContact color={'#DB4D30'}/>
                        <TelegramContact color={'#DB4D30'}/>
                    </div>
                    <div className={styles.contact}>
                        <div style={{color: '#DB4D30'}}>
                            +7 (931) 308-57-59
                        </div>
                    </div>
                </Menu>
            </div>
        </div>
    );
};

export default NavigationMenuMobile;