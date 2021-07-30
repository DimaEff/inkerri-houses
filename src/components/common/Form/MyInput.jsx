import React, {forwardRef} from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    inputWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        height: '44px',
        width: '100%',
        borderRadius: '16px',
        backgroundColor: '#FFF',
    },
    input: {
        border: 'none',
        outline: 'none',

        height: '100%',
        width: '80%',
        fontSize: '16px',

        '&::placeholder': {
            fontSize: '16px',
        }
    },
    errorText: {
        position: 'absolute',
        bottom: '-50px',

        fontSize: '12px',
        color: 'rgba(255, 0, 0, .7)',
    }
}))

const MyInput = forwardRef((props, ref) => {
    const styles = useStyles();

    return <div className={styles.inputWrapper}>
        <input type="text" className={styles.input} ref={ref} {...props}/>
        <div className={styles.errorText}>{props.errorText?.message}</div>
    </div>
});

export default MyInput;
