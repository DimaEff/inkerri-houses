import React from 'react';
import * as yup from "yup";

import AppContainerItem from "../common/AppContainer/AppContainerItem";
import questionImg from '../../assets/HomePage/question.svg';
import AppContainer from "../common/AppContainer/AppContainer";
import {callOrderTemplate} from "../../utils/consts";
import FeedbackForm from "../FeedbackForm/FeedbackForm";


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

const NeedHelp = ({grey}) => {
    return (
        <AppContainer title={'Нужна помощь?'} grey={!!grey} reverse>
            <a name={"help"}/>
            <AppContainerItem lg={7} md={7} sm={12} xs={12}>
                <img style={{maxWidth: '100%', maxHeight: '100%',}} src={questionImg}/>
            </AppContainerItem>
            <AppContainerItem margin lg={5} md={5} sm={12} xs={12}>
                <FeedbackForm template={callOrderTemplate} schema={schema} buttonText={'Заказать звонок'}>
                    {[
                        {name: 'username', placeholder: 'Имя*'},
                        {name: 'surname', placeholder: 'Фамилия*'},
                        {name: 'email', placeholder: 'Email*'},
                        {name: 'phone', placeholder: 'Номер телефона*'},
                    ]}
                </FeedbackForm>
            </AppContainerItem>
        </AppContainer>
    );
};

export default NeedHelp;