import React from 'react';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {connect} from "react-redux";

import Form from "../common/Form/Form";
import MyButton from "../common/Button/MyButton";
import MyInput from "../common/Form/MyInput";
import {login} from "../../store/userReducer";


const schema = yup.object().shape({
    email: yup.string().required('Это поле является обязательным').email('Введите корректный email'),
    password: yup.string().required('Это поле является обязательным').min(6, 'Минимум 6 символов').max(12, 'Максимум 12 символов'),
});

const LoginForm = ({login}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const onLogin = async (fieldsData) => {
        await login({...fieldsData});
        console.log('login')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onLogin)}>
                <MyInput errorText={errors.email} placeholder={'Email*'} {...register('email')}/>
                <MyInput type={'password'} errorText={errors.password} placeholder={'Пароль*'} {...register('password')}/>
                <MyButton>Войти</MyButton>
            </Form>
        </div>
    );
};

export default connect(null, {login})(LoginForm);
