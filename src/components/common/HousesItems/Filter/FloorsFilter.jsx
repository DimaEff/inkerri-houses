import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import MyButton from "../../Button/MyButton";
import {displaySize} from "../../../../utils/consts";
import useResolution from "../../../../hooks/useResolution";


const useStyles = makeStyles(theme => ({
    root: ({column}) => ({
        display: 'flex',
        flexFlow: column && 'column',
        width: '100%',
        minWidth: '279px',

        '& div': {
            height: '30px',
            marginRight: '10px',
            marginBottom: column && '10px',
            marginLeft: column && '10px',
        },

        [theme.breakpoints.down(displaySize)]: {

        },
    }),
}))

const Item = ({value, title, floors, action}) => {
    return (
        <div>
            {
                value === floors ?
                    <MyButton style={{minHeight: '30px', padding: '5px 10px', fontSize: '16px'}}>{title}</MyButton>:
                    <div style={{cursor: 'pointer'}} onClick={() => action(value)}>
                        <Typography style={{fontSize: '16px'}}>{title}</Typography>
                    </div>
            }
        </div>
    )
}

const FloorsFilter = ({floors, setFloors, outsideFilter, column, onFilter, ...props}) => {
    const styles = useStyles({column});

    const floorsItems = [
        {value: '1', title: '1 этаж'},
        {value: '1.5', title: '1.5 этажа'},
        {value: '2', title: '2 этажа'},
    ];

    const onChange = (value) => {
        setFloors(value);
        onFilter({floors: value});
    }

    return (
        <div className={styles.root} {...props}>
            {outsideFilter && <Item value={'all'} title={'Все проекты'} floors={floors} action={onChange}/>}
            {floorsItems.map(floor => <Item key={floor.title} floors={floors} action={onChange} {...floor}/>)}
        </div>
    );
};

export default FloorsFilter;