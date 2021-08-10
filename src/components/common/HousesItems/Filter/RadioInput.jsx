import React from 'react';
import {Radio, RadioGroup, FormControlLabel, FormControl} from '@material-ui/core';


const RadioInput = ({children, value, setValue, defaultValue, ...props}) => {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <FormControl component={"fieldset"}>
                <RadioGroup aria-label={"bedRooms"} name={"bedRooms"} value={value} onChange={handleChange}>
                    {children.map(({value, label}) => <FormControlLabel key={label} value={value} control={<Radio />} label={label} />)}
                </RadioGroup>
            </FormControl>
        </div>

    );
}

export default RadioInput;