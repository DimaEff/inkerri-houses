import React from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    input: {
        border: 'none',
        outline: 'none',

        width: '100%',
        padding: '2px',
        borderRadius: '20px',
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: 500,
        color: '#B72A27',
        boxShadow: '0px 4px 4px 0px #00000040 inset',
    }
}))

const FilterInput = ({value, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <input className={styles.input} value={value || ''} type={"number"} {...props}/>
        </div>
    );
};

export default FilterInput;