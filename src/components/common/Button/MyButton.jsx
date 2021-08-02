import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    button: {
        border: 'none',
        outlined: 'none',

        minHeight: '44px',
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '5px',

        backgroundColor: '#b72a27',
        fontSize: '28px',
        cursor: 'pointer',
        fontWeight: 400,
    },
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
                {children || 'Отправить'}
            </Typography>
        </button>
    )
};

export default MyButton;
