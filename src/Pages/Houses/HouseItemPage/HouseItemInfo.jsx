import React, {useState} from 'react';
import {Dialog, makeStyles, Typography} from "@material-ui/core";

import {getPriceTemplate} from "../../../utils/helpers";
import HouseItemParams from "../../../components/common/HousesItems/HouseItemParams";
import TextContainer from "../../../components/common/AppContainer/TextContainer";
import MyButton from "../../../components/common/Button/MyButton";
import {callOrderTemplate} from "../../../emailSendler";
import FeedbackForm from "../../../components/FeedbackForm/FeedbackForm";
import * as yup from "yup";


const schema = yup.object().shape({
    username: yup.string()
        .required('Обязательное поле')
        .min(3, 'Минимум 3 символа')
        .max(12, 'Максимум 12 символов'),
    surname: yup.string()
        .required('Обязательное поле')
        .min(3, 'Минимум 3 символа')
        .max(12, 'Максимум 12 символов'),
    email: yup.string()
        .required('Обязательное поле')
        .email('Некорректный email'),
    phone: yup.string()
        .required('Обязательное поле')
        .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, 'Некорректный номер')
});

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

    const [open, setOpen] = useState(false);

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
                <div>
                    <MyButton action={() => setOpen(true)}>
                        Отправить заявку
                    </MyButton>
                    <Dialog scroll={'body'} open={open} onClose={() => setOpen(false)}>
                        <FeedbackForm defaultValues={{house: houseItem.title}} template={callOrderTemplate}
                                      schema={schema} action={() => setOpen(false)} buttonText={'Заказать звонок'}>
                            {[
                                {name: 'username', placeholder: 'Имя*'},
                                {name: 'surname', placeholder: 'Фамилия*'},
                                {name: 'email', placeholder: 'Email*'},
                                {name: 'phone', placeholder: 'Номер телефона*'},
                                {name: 'house', placeholder: 'Название проекта'},
                            ]}
                        </FeedbackForm>
                    </Dialog>
                </div>
            </TextContainer>
        </div>
    );
};

export default HouseItemInfo;