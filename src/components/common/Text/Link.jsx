import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    link: ({fontSize, fontWeight}) => ({
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
        color: 'inherit',
        fontSize: fontSize,
        fontWeight: fontWeight,
    })
}))

const Link = ({children, to, color, fontSize, fontWeight, ...props}) => {
    const styles = useStyles({fontSize, fontWeight});

    return (
        <NavLink to={to} className={styles.link} {...props}>
            <Typography color={color || 'secondary'}>
                {children}

            </Typography>
        </NavLink>
    );
};

export default Link;