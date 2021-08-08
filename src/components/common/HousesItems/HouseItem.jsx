import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {useHistory} from 'react-router-dom';

import {getFloorTitle, getPriceTemplate} from "../../../utils/helpers";
import {getHousesItemRoute} from "../../../AppRouter/consts";
import RedPaper from "./RedPaper";
import MyButton from "../Button/MyButton";
import HouseItemParams from "./HouseItemParams";
import bedIcon from '../../../assets/HouseItem/bed.svg';
import bathIcon from '../../../assets/HouseItem/bath.svg';
import houseIcon from '../../../assets/HouseItem/house.svg';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',

        width: '84%',
        height: '100%',
        padding: '40px 0px',
    },
    floorTitle: {
        '& p': {
            fontWeight: 600,
        }
    },
    img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        height: '160px',

        '& img': {
            width: '100%',
            maxWidth: '100%',
        }
    },
    title: {
        width: '100%',
        textAlign: 'center',

        '& p': {
            fontSize: '18px',
            fontWeight: 700,
        }
    },
    price: {
        display: 'flex',
        justifyContent: 'center',

        width: '100%',
        borderRadius: '5px',
        backgroundColor: '#3E3E3E',

        '& p': {
            fontSize: '20px',
        }
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
    }
}))

const HouseItem = ({variant, shadow, houseItem, ...props}) => {
    const styles = useStyles({shadow});
    const history = useHistory();

    const plug = '-'.repeat(5);

    const paramsFirst = [
        {
            title: 'Общая площадь',
            value: houseItem.totalArea,
            unit: 'м2',
        },
        {
            icon: bedIcon,
            title: 'Кол-во спален',
            value: houseItem.bedRooms,
        },
        {
            icon: bathIcon,
            title: 'Кол-во санузлов',
            value: houseItem.bathRooms,
        },
        {
            icon: houseIcon,
            title: 'Этажей в доме',
            value: houseItem.floors,
        },
    ];

    const paramsSecondary = [
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

    const cornerText = variant === 'secondary' ?
        getFloorTitle(houseItem.floorsNumber) || plug :
        (houseItem.usableArea.split(',')[0] || plug) + ' м2';

    return (
        <RedPaper shadow cornerText={cornerText} h={'550px'} w={'320px'} {...props}>
            <div className={styles.root}>
                <div className={styles.floorTitle}>
                    <Typography>
                        {getFloorTitle(houseItem.floors) || plug}
                    </Typography>
                </div>
                <div className={styles.img}>
                    <img src={houseItem.imagesURL[0]}/>
                </div>
                <div className={styles.title}>
                    <Typography>
                        {houseItem.title || plug}
                    </Typography>
                </div>
                <div className={styles.price}>
                    <Typography color={'secondary'}>
                        {getPriceTemplate(houseItem.minPrice, houseItem.maxPrice) || plug}
                    </Typography>
                </div>
                <div style={{width: '100%'}}>
                    <HouseItemParams params={variant === 'secondary' ? paramsSecondary || plug: paramsFirst || plug}/>
                </div>
                <div className={styles.button}>
                    <MyButton action={() => history.push(getHousesItemRoute(houseItem.houseId))}>
                        Подробнее
                    </MyButton>
                </div>
            </div>
        </RedPaper>
    );
};

export default HouseItem;