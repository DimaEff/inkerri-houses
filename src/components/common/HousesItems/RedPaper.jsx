import React from 'react';
import {makeStyles, Paper, Typography} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: ({shadow, h, w, minW}) => ({
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flexFlow: 'column',

        height: h || 'auto',
        width: w || 'auto',
        minWidth: minW || '260px',
        maxWidth: '90vw',
        border: '2px solid #B72A27',
        borderRadius: '10px',
        padding: '20px 0px',
        margin: '15px 5px',
        boxShadow: shadow && '0px 2px 40px 2px rgba(0, 0, 0, 0.15)',
    }),
    cornerInfo: {
        position: 'absolute',
        top: '-2px',
        right: '-2px',

        minWidth: '40px',
        padding: '8px',
        borderBottomLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        textAlign: 'center',
        backgroundColor: '#B72A27',

        '& p': {
            fontWeight: 700,
        },
    },
}))

const MyComponent = ({children, shadow, cornerText, h, w, minW, ...props}) => {
    const styles = useStyles({shadow, h, w, minW});

    return (
        <Paper elevation={0} className={styles.root} {...props}>
            {
                cornerText &&
                <div className={styles.cornerInfo}>
                    <Typography color={'secondary'}>
                        {cornerText}
                    </Typography>
                </div>
            }
            {children}
        </Paper>
    );
};

export default MyComponent;