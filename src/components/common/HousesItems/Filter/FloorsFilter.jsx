import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import MyButton from "../../Button/MyButton";
import {displaySize} from "../../../../utils/consts";


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

const Item = ({value, title, floors, setFloors}) => {
    return (
        <div>
            {
                value === floors ?
                    <MyButton style={{minHeight: '30px', padding: '5px 10px', fontSize: '16px'}}>{title}</MyButton>:
                    <div style={{cursor: 'pointer'}} onClick={() => setFloors(value)}>
                        <Typography style={{fontSize: '16px'}}>{title}</Typography>
                    </div>
            }
        </div>
    )
}

const FloorsFilter = ({floors, setFloors, withoutAll, column, ...props}) => {
    const styles = useStyles({column});

    const floorsItems = [
        {value: '1', title: '1 этаж'},
        {value: '1.5', title: '2 этажа'},
        {value: '2', title: '3 этажа'},
    ];

    return (
        <div className={styles.root} {...props}>
            {withoutAll || <Item value={'all'} title={'Все проекты'} floors={floors} setFloors={setFloors}/>}
            {floorsItems.map(floor => <Item key={floor.title} floors={floors} setFloors={setFloors} {...floor}/>)}
        </div>
    );
};

export default FloorsFilter;