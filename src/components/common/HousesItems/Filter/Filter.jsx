import React, {useCallback, useEffect, useState} from 'react';

import RedPaper from "../RedPaper";
import DoubleInputSlider from "./DoubleInputSlider";
import FilterItem from "./FilterItem";
import MyButton from "../../Button/MyButton";
import RadioInput from "./RadioInput";
import {makeStyles} from "@material-ui/core";
import FloorsFilter from "./FloorsFilter";


const useStyles = makeStyles((theme) => ({
    buttons: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',

        '& button': {
            marginBottom: '10px',
        }
    }
}))

const Filter = ({prices, squares, floors, setFloors, onAdaptiveFilter, onFilter}) => {
    const styles = useStyles();

    const setDefaultValues = useCallback(() => {
        setFloors('all');

        setMinPrice(prices[0]);
        setMaxPrice(prices[1]);

        setMinSquares(Math.floor(squares[0]));
        setMaxSquares(Math.ceil(squares[1]));

        setBedRooms('all');

        setBathRooms('all');
    }, [prices, squares, setFloors,])

    useEffect(() => {
        setDefaultValues();
    }, [setDefaultValues])

    const [minPrice, setMinPrice] = useState(prices[0]);
    const [maxPrice, setMaxPrice] = useState(prices[1]);

    const [minSquares, setMinSquares] = useState(squares[0]);
    const [maxSquares, setMaxSquares] = useState(squares[1]);

    const [bedRooms, setBedRooms] = useState('all');

    const [bathRooms, setBathRooms] = useState('all');

    const onSubmit = () => {
        onAdaptiveFilter({
            minPrice,
            maxPrice,
            minSquares,
            maxSquares,
            bedRooms,
            bathRooms,
            floors});
    }

    const onReset = () => {
        setDefaultValues();
        onAdaptiveFilter(null);
    }

    return (
        <RedPaper w={'230px'} minW={'200px'}>
            {/*<div style={{width: '90%'}}>*/}
                <FilterItem title={'Количество этажей'}>
                    <FloorsFilter floors={floors} setFloors={setFloors} onFilter={onFilter} column/>
                </FilterItem>
                <FilterItem title={'Цена (₽)'}>
                    <DoubleInputSlider
                        min={minPrice}
                        max={maxPrice}
                        setMin={setMinPrice}
                        setMax={setMaxPrice}
                        minValue={prices[0]}
                        maxValue={prices[1]}
                    />
                </FilterItem>
                <FilterItem title={'Площадь (м2)'}>
                    <DoubleInputSlider
                        min={minSquares}
                        max={maxSquares}
                        setMin={setMinSquares}
                        setMax={setMaxSquares}
                        minValue={Math.floor(squares[0])}
                        maxValue={Math.ceil(squares[1])}
                    />
                </FilterItem>
                <FilterItem title={'Количество спален'}>
                    <RadioInput value={bedRooms} setValue={setBedRooms} defaultValue={'all'} name={'bedRooms'}>
                        {[
                            {value: 'all', label: 'Все'},
                            {value: '1', label: '1'},
                            {value: '2', label: '2'},
                            {value: '3', label: '3'},
                            {value: '4', label: '4'},
                            {value: '5', label: '5'},
                            {value: '5+', label: '5+'},
                        ]}
                    </RadioInput>
                </FilterItem>
                <FilterItem title={'Количество с/узлов'}>
                    <RadioInput value={bathRooms} setValue={setBathRooms} defaultValue={'all'} name={'bathRooms'}>
                        {[
                            {value: 'all', label: 'Все'},
                            {value: '1', label: '1'},
                            {value: '2', label: '2'},
                            {value: '3', label: '3'},
                            {value: '4', label: '4'},
                            {value: '4+', label: '4+'},
                        ]}
                    </RadioInput>
                </FilterItem>
                <div className={styles.buttons}>
                    <MyButton action={onReset}>
                        Сбросить
                    </MyButton>
                    <MyButton action={onSubmit}>
                        Применить
                    </MyButton>
                </div>
            {/*</div>*/}
        </RedPaper>
    );
};

export default Filter;