import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {connect} from "react-redux";

import {getFloorTitle, getPriceTemplate} from "../../../utils/helpers";
import {HouseItemRoute} from "../../../AppRouter/consts";
import RedPaper from "./RedPaper";
import MyButton from "../Button/MyButton";
import HouseItemParams from "./HouseItemParams";
import bedIcon from '../../../assets/HouseItem/bed.svg';
import bathIcon from '../../../assets/HouseItem/bath.svg';
import houseIcon from '../../../assets/HouseItem/house.svg';
import Link from "../Text/Link";
import {getUser} from "../../../selectors/user_selectors";
import {openCloseAdminDialogContent} from "../../../store/adminReducer";
import {firestoreCollections} from "../../../utils/consts";
import AdminItemsPanel from "../../Admin/AdminItemsPanel";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',

        width: '90%',
        height: '100%',
        padding: '15px 0px',
    },
    floorTitle: {
        height: '30px',

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

const HouseItem = ({variant, shadow, houseItem, user, openCloseAdminDialogContent, ...props}) => {
    const styles = useStyles({shadow});

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
        houseItem.floors:
        (houseItem.usableArea.toString().split('.')[0]  + ' м2');

    return (
        <RedPaper shadow cornerText={cornerText} h={'550px'} w={'320px'} {...props}>
            <div className={styles.root}>
                {user && <div>
                    <AdminItemsPanel collectionName={firestoreCollections.houses} item={houseItem}/>
                </div>}
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
                    <Link to={HouseItemRoute(houseItem.id)}>
                        <MyButton>
                            Подробнее
                        </MyButton>
                    </Link>
                </div>
            </div>
        </RedPaper>
    );
};

const mapStateToProps = (state) => ({
    user: getUser(state),
})

export default connect(mapStateToProps, {openCloseAdminDialogContent})(HouseItem);