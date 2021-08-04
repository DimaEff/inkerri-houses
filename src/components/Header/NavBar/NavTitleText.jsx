import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import {displaySize} from "../../../utils/consts";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',

        height: '100%',
        marginRight: '11vw',

        [theme.breakpoints.down(displaySize)]: {
            marginRight: '10px',
        },
    },
    text: {
        fontSize: '20px',

        [theme.breakpoints.down(displaySize)]: {
            fontSize: '12px',
        },
    },
    decoration: ({color}) => ({
        width: '6px',
        height: '38px',
        borderRadius: '30px',
        backgroundColor: color || '#FFF',
        marginRight: '12px',

        [theme.breakpoints.down(displaySize)]: {
            width: '4px',
            height: '21px',
            minWidth: '3px',
            minHeight: '21px',
            marginRight: '8px',
        },
    })
}))

const NavTitleText = ({children, color, ...props}) => {
    const styles = useStyles({color});

    return (
        <div className={styles.root} {...props}>
            <div className={styles.decoration}/>
            <Typography color={'secondary'} className={styles.text}>
                {children}
            </Typography>
        </div>
    );
};

export default NavTitleText;