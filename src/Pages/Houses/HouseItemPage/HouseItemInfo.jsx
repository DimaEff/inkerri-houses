import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import {getPriceTemplate} from "../../../utils/helpers";
import HouseItemParams from "../../../components/common/HousesItems/HouseItemParams";
import TextContainer from "../../../components/common/AppContainer/TextContainer";


const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '10px',
    },
    description: {
        overflowY: 'auto',
        // minHeight: '100px',
        maxHeight: '300px',
    }
}))

const HouseItemInfo = ({houseItem}) => {
    const styles = useStyles();
    const plug = '-'.repeat(5);

    const params = [
        {
            title: 'Полезная площадь',
            value: houseItem.usableArea,
            unit: 'м2',
        },
        {
            title: 'Общая площадь',
            value: houseItem.totalArea,
            unit: 'м2',
        },
        {
            title: 'Габариты',
            value: houseItem.dimensions[0] + 'x' + houseItem.dimensions[1],
            unit: 'м',
        },
        {
            title: 'Этажность',
            value: houseItem.floors,
        },
    ];

    return (
        <div className={styles.root}>
            <TextContainer mB={'10px'}>
                <div>
                    <Typography variant={'h5'} color={'error'}>
                        {getPriceTemplate(houseItem.minPrice, houseItem.maxPrice) || plug}
                    </Typography>
                </div>
                <div className={styles.description}>
                    <Typography>
                        {houseItem.description || plug}
                    </Typography>
                </div>
                <div>
                    <Typography variant={'h6'}>
                        Параметры
                    </Typography>
                    <div>
                        <HouseItemParams params={params}/>
                    </div>
                </div>
            </TextContainer>
        </div>
    );
};

export default HouseItemInfo;