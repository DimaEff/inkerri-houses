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
        margin: '5px 0px',
        borderRadius: '16px',
        backgroundColor: '#FFF',
    },
    input: {
        border: 'none',
        outline: 'none',

        height: '100%',
        width: '80%',
        fontSize: '16px',
        backgroundColor: 'inherit',

        '&::placeholder': {
            fontSize: '16px',
        },
    },
    errorText: {
        position: 'absolute',
        bottom: '-50px',

        fontSize: '14px',
        color: 'rgba(255, 0, 0, .7)',
        textAlign: 'center',
    },
}))

const Select = forwardRef(({children, errorText, ...props}, ref) => {
    const styles = useStyles();

    return <div className={styles.inputWrapper}>
        <select className={styles.input} ref={ref} autoComplete={'off'} {...props}>
            {children}
        </select>
        <div className={styles.errorText}>
            {errorText?.message}
        </div>
    </div>
});

export default Select;