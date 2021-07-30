import React from 'react';
import {makeStyles, Paper} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        maxWidth: '400px',
        height: '467px'
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#F3F2F2',
        borderRadius: '30px',
        boxShadow: '0px 2px 70px 4px rgba(0, 0, 0, 0.32)',
    },
    form: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',

        width: '70%',
        marginTop: '60px',
        marginBottom: '60px',

        '& div': {
            marginBottom: '30px',
        },
        // '&:first-child': {
        //     marginBottom: '0',
        // },
        '& *': {
            fontFamily: ['"Noto Sans"',].join(','),
        }
    }
}))

const Form = ({children, onSubmit, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Paper className={styles.paper} {...props}>
                <form onSubmit={onSubmit} className={styles.form}>
                    {children}
                </form>
            </Paper>
        </div>
    );
};

export default Form;
