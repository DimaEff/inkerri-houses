import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {displaySize} from "../../../utils/consts";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        // justifyContent: 'center',
        alignItems: 'center',

        height: '400px',
        marginTop: '0px',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        height: '122px',
        width: '122px',

        '& img': {
            maxHeight: '100%',
            maxWidth: '100%',
        }
    },
    title: {
        marginTop: '10px',
        marginBottom: '20px',

        fontSize: '20px',
        fontWeight: 600,
        textAlign: 'center',

        [theme.breakpoints.down(displaySize)]: {
            fontSize: '12px',
        },
    },
    decoration: {
        height: '3px',
        width: '60%',
        marginBottom: '20px',
        backgroundColor: '#B72A27',
    },
    text: {
        width: '80%',
        maxWidth: '320px',
        textAlign: 'center',

        '& p': {
            fontSize: '18px',

            [theme.breakpoints.down(displaySize)]: {
                fontSize: '11px',
            },
        },
    }
}))

const TextIcon = ({children, icon, title}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.icon}>
                <img src={icon}/>
            </div>
            <div className={styles.title}>
                <p>
                    {title}
                </p>
            </div>
            <div className={styles.decoration}/>
            <div className={styles.text}>
                <Typography>
                    {children}
                </Typography>
            </div>
        </div>
    );
};

export default TextIcon;