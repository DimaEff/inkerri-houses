import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    button: {
        border: 'none',
        outlined: 'none',

        backgroundColor: '#b72a27',
        height: '44px',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius: '5px',
        fontSize: '28px'
    }
}))

const MyButton = ({children, action, ...props}) => {
    const styles = useStyles();

    return (
        <button type={props.type || 'submit'}
                onClick={action}
                className={styles.button}
                {...props}
        >
            <Typography color={'secondary'}>
                {children}
            </Typography>
        </button>
    )
};

export default MyButton;
