import React from 'react';
import {makeStyles, Paper, Typography} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: ({shadow, h, w}) => ({
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',

        height: h || 'auto',
        width: w || 'auto',
        minWidth: '279px',
        border: '2px solid #B72A27',
        borderRadius: '10px',
        padding: '0px',
        margin: '15px 5px',
        boxShadow: shadow && '-2px -2px 70px 0px #00000012',
    }),
    cornerInfo: {
        position: 'absolute',
        top: '-2px',
        right: '-2px',

        padding: '8px',
        borderBottomLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        backgroundColor: '#B72A27',

        '& p': {
            fontWeight: 700,
        },
    },
}))

const MyComponent = ({children, shadow, cornerText, h, w, ...props}) => {
    const styles = useStyles({shadow, h, w});

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