import React from 'react';
import {Button, makeStyles, Menu, MenuItem, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        right: '-10px',
        top: '5px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '65vw',
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
                >
                    {
                        paths.map(({name, path}) => {
                            return (
                                <MenuItem key={path} onClick={handleClose} style={{position: 'relative'}}>
                                    <NavLink to={path} style={{position: 'absolute', width: '100%', height: '100%'}}/>
                                    {name}
                                </MenuItem>
                            )
                        })
                    }
                </Menu>
            </div>
        </div>
    );
};

export default NavigationMenuMobile;