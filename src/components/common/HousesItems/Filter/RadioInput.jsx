import React from 'react';
import {Radio, RadioGroup, FormControlLabel, FormControl} from '@material-ui/core';


const RadioInput = ({children, value, name, defaultValue, setValue}) => {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <FormControl component={"fieldset"}>
                <RadioGroup  aria-label={name} name={name} value={value} defaultValue={defaultValue} onChange={handleChange}>
                    {children.map(({value, label}) => <FormControlLabel
                        key={label}
                        value={value}
                        control={<Radio/>}
                        label={label}
                    />)}
                </RadioGroup>
            </FormControl>
        </div>

    );
}

export default RadioInput;