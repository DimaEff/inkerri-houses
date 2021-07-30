import React from 'react';
import emailjs from 'emailjs-com';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import Form from "../common/Form/Form";
import MyButton from "../common/Button/MyButton";
import MyInput from "../common/Form/MyInput";


const YOUR_SERVICE_ID = 'service_68ik7oo';
const YOUR_TEMPLATE_ID_1 = 'template_upgw49v';
const YOUR_TEMPLATE_ID_2 = 'template_upgw49v';
const YOUR_USER_ID = 'user_vojqm7N86tQAGQq6vat64';

const schema = yup.object().shape({
    username: yup.string().required('Это поле является обязательным').min(3, 'Минимум 3 символа').max(12, 'Максимум 12 символов'),
    surname: yup.string().required('Это поле является обязательным').min(3, 'Минимум 3 символа').max(12, 'Максимум 12 символов'),
    email: yup.string().required('Это поле является обязательным').email('Введите корректный email'),
    phone: yup.string().required('Это поле является обязательным'),
});

const FeedbackForm = ({children, buttonText, variant, ...props}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const sendEmail = async (e) => {
        e.preventDefault();

        await emailjs.sendForm(
            YOUR_SERVICE_ID,
            YOUR_TEMPLATE_ID_1,
            e.target,
            YOUR_USER_ID);

        e.target.reset();
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(sendEmail)}>
                <input type="hidden" name="contact_number" />
                {children.fields.map(({name, placeholder, type}) => <MyInput key={name}
                                                       placeholder={placeholder}
                                                       type={type}
                                                       errorText={errors[name]}
                                                       {...register(name)}
                />)}
                <MyButton >
                        {buttonText}
                </MyButton>
            </Form>
        </div>
    );
};

export default FeedbackForm;
