import React from 'react';
import {forwardRef} from "react/cjs/react.production.min";
import {TextField} from "@material-ui/core";


const Input = forwardRef((props, ref) => {

    return <TextField
        fullWidth
        color={'primary'}
        variant={'outlined'}
        margin={'normal'}
        inputRef={ref}
        {...props}
    />
});



export default Input;