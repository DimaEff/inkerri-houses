import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import {displaySize} from "../../../utils/consts";
import Form from "../Form/Form";


const useStyles = makeStyles((theme) => ({
    button: ({variant, oval}) => ({
        border: variant === 'secondary' ? '2px solid #DB4D30':'none',
        outlined: variant === 'secondary' || 'none',

        minHeight: '44px',
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: oval ? '30px': '5px',

        backgroundColor: variant === 'secondary' ? 'transparent': '#b72a27',
        fontSize: '28px',
        cursor: 'pointer',
        fontWeight: 400,

        [theme.breakpoints.down(displaySize)]: {
            fontSize: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
        },
    }),
}))

const MyButton = ({children, action, variant, oval, ...props}) => {
    const styles = useStyles({variant, oval});

    return (
        <button type={props.type || 'submit'}
                onClick={action}
                className={styles.button}
                {...props}
        >
            <Typography color={variant === 'secondary' ? 'error': 'secondary'}>
                {children || 'Отправить'}
            </Typography>
        </button>
    )
};

export default MyButton;
