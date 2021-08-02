import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import {displaySize} from '../../../utils/consts';


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '32px',

        [theme.breakpoints.down(displaySize)]: {
            marginBottom: '15px',
        },
    },
    text: {
        fontSize: '20px',
        fontWeight: 700,

        [theme.breakpoints.down(displaySize)]: {
            fontSize: '16px',
        },
    },
    decorate: {
        width: '100px',
        height: '6px',
        borderRadius: '30px',
        marginTop: '8px',
        backgroundColor: '#B72A27',
    }
}))

const AppContainerTitle = ({children}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Typography className={styles.text}>
                {children}
            </Typography>
            <div className={styles.decorate}/>
        </div>
    );
};

export default AppContainerTitle;