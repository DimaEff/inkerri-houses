import React from 'react';
import * as yup from "yup";
import {connect} from "react-redux";

import Form from "../common/Form/Form";
import {login} from "../../store/userReducer";


const schema = yup.object().shape({
    email: yup.string()
        .required('Обязательное поле')
        .email('Некорректный email'),
    password: yup.string()
        .required('Обязательное поле')
        .min(6, 'Минимум 6 символов')
        .max(12, 'Максимум 12 символов'),
});

const LoginForm = ({login, ...props}) => {
    const onLogin = async (data) => {
        await login(data.email, data.password);
    }

    return (
        <div>
            <Form onSubmit={onLogin} buttonText={'Войти'} schema={schema} {...props}>
                {[
                    {name: "email", placeholder: 'Email*', type: "email"},
                    {name: "password", placeholder: 'Пароль*', type: "password"},
                ]}
            </Form>
        </div>
    );
};

export default connect(null, {login})(LoginForm);
