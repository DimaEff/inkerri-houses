import React from 'react';
import * as yup from "yup";
import {connect} from "react-redux";

import Form from "../common/Form/Form";
import {addNewUser} from "../../store/userReducer";


const schema = yup.object().shape({
    email: yup.string()
        .required('Это поле является обязательным')
        .email('Введите корректный email'),
    password: yup.string()
        .required('Это поле является обязательным')
        .min(6, 'Минимум 6 символов')
        .max(12, 'Максимум 12 символов'),
    confirmPassword: yup.string()
        .required('Это поле является обязательным')
        .oneOf([yup.ref("password"), null], "Пароли должны совпадать"),
});

const Registration = ({addNewUser, ...props}) => {
    const registration = async (data) => {
        await addNewUser(data.email, data.password)
    }

    return (
        <div>
            <Form onSubmit={registration} buttonText={'Зарегистрировать'} schema={schema} {...props}>
                {[
                    {name: "email", placeholder: 'Email*', type: "email"},
                    {name: "password", placeholder: 'Пароль*', type: "password"},
                    {name: "confirmPassword", placeholder: 'Повторите пароль*', type: "password"},
                ]}
            </Form>
        </div>
    );
};

export default connect(null, {addNewUser})(Registration);

