import React from 'react';
import {makeStyles, Slider, Typography} from '@material-ui/core';
import FilterInput from "./FilterInput";
import {getStringPrice} from "../../../../utils/helpers";


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    inputs: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        color: '#B72A27',
    },
    decor: {
        width: '18px',
        height: '2px',
        backgroundColor: '#B72A27',
        margin: '0px 2px',
    },
    values: {
        display: 'flex',
        justifyContent: 'space-between',

        width: '100%',

        '& p': {
            fontSize: '12px',
        },
    }
});

const DoubleInputSlider = ({min, max, setMin, setMax, minValue, maxValue}) => {
    const styles = useStyles();

    const checkInputValue = (value) => {
        return value >= minValue && value <= maxValue
    }

    const handleChange = (e, value) => {
        setMin(value[0]);
        setMax(value[1]);
    };

    const handleMinChange = (e) => {
        setMin(+e.target.value);
    };

    const handleMaxChange = (e) => {
        setMax(+e.target.value);
    };

    const onMinBlur = (e) => {
        const value = +e.target.value;

        if (!checkInputValue(value)) {
            setMin(minValue);
        } else if (value >= max) {
            setMin(value);
            setMax(value);
        } else {
            setMin(value);
        }
    }

    const onMaxBlur = (e) => {
        const value = +e.target.value;

        if (!checkInputValue(value)) {
            setMax(maxValue);
        } else if (value <= min) {
            setMax(value);
            setMin(value);
        } else {
            setMax(value);
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.inputs}>
                <div>
                    <FilterInput type={'number'} value={min} onChange={handleMinChange} onBlur={onMinBlur}/>
                </div>
                <div className={styles.decor}/>
                <div>
                    <FilterInput type={'number'} value={max} onChange={handleMaxChange} onBlur={onMaxBlur}/>
                </div>
            </div>
            <Slider
                value={[min, max]}
                onChange={handleChange}
                min={minValue}
                max={maxValue}
                defaultValue={[minValue, maxValue]}
                aria-labelledby="range-slider"
                color={'secondary'}
            />
            <div className={styles.values}>
                <Typography>{min ? getStringPrice(min): ''}</Typography>
                <Typography>{max ? getStringPrice(max): ''}</Typography>
            </div>
        </div>
    );
}

export default DoubleInputSlider;