import React from 'react';
import {NavLink} from "react-router-dom";
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    link: {
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
    }
}))

const Link = ({children, to, ...props}) => {
    const styles = useStyles();

    return (
        <NavLink to={to} className={styles.link}>
            <Typography color={'secondary'}>
                {children}
            </Typography>
        </NavLink>
    );
};

export default Link;