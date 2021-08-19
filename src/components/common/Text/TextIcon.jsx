import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {displaySize} from "../../../utils/consts";


const useStyles = makeStyles((theme) => ({
    root: ({minHeight}) => ({
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',

        maxWidth: '400px',
        minHeight: minHeight || '400px',
        marginTop: '0px',

        [theme.breakpoints.down(displaySize)]: {
            minHeight: '250px',
        },
    }),
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
            fontSize: '16px',
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
        textAlign: 'center',

        '& p': {
            fontSize: '18px',

            [theme.breakpoints.down(displaySize)]: {
                fontSize: '14px',
            },
        },
    }
}))

const TextIcon = ({children, icon, title, minHeight, ...props}) => {
    const styles = useStyles({minHeight});

    return (
        <div className={styles.root} {...props}>
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