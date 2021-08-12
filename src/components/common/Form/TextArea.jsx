import React, {useState} from 'react';
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        height: '190px',
        width: '100%',
        marginTop: '20px',
        padding: '20px 0px',
        borderRadius: '16px',
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    input: {
        width: '80%',
        height: '100%',
        outline: 'none',
        border: 'none',
        fontSize: '16px',
        backgroundColor: 'inherit',
        resize: 'none',

        '&::placeholder': {
            fontSize: '16px',
        },
    },
    symbols: {
        textAlign: 'right',
        marginTop: '20px',
    }
}))

const TextArea = ({maxLength, myValue, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <textarea className={styles.input} maxLength={maxLength} {...props}/>
            <div className={styles.symbols}>
                <Typography>
                    {myValue?.length || 0} / {maxLength}
                </Typography>
            </div>
        </div>
    );
};

export default TextArea;