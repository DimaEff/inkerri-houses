import React from 'react';
import {makeStyles, Paper} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: ({mW}) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '80vw',
        maxWidth: mW || 'auto',
        minWidth: '280px',

        paddingTop: '60px',
        paddingBottom: '60px',
        borderRadius: '30px',
        backgroundColor: '#F3F2F2',
        boxShadow: '0px 2px 70px 4px rgba(0, 0, 0, 0.32)',
    }),
}))

const MyPaper = ({children, mW, ...props}) => {
    const styles = useStyles({mW});

    return (
        <Paper className={styles.root} {...props}>
            {children}
        </Paper>
    );
};

export default MyPaper;