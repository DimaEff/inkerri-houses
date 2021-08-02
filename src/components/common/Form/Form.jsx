import React from 'react';
import {makeStyles, Paper} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import MyInput from "./MyInput";
import MyButton from "../Button/MyButton";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '80vw',
        maxWidth: '400px',
        minWidth: '280px',

        paddingTop: '60px',
        paddingBottom: '60px',
        borderRadius: '30px',
        backgroundColor: '#F3F2F2',
        boxShadow: '0px 2px 70px 4px rgba(0, 0, 0, 0.32)',
    },
    form: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',

        width: '70%',

        '& div': {
            marginBottom: '30px',
        },
    }
}))

const Form = ({children, onSubmit, schema, buttonText, antiSpam, ...props}) => {
    const styles = useStyles();

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const onHandleSubmit = async (data, e) => {
        const result = await onSubmit(data, e)
        reset(result);
    }

    return (
        <div className={styles.root}>
            <Paper className={styles.paper} {...props}>
                <form onSubmit={handleSubmit(onHandleSubmit)} className={styles.form}>
                    {antiSpam}
                    {children?.map(({name, placeholder, type, ...props}) => {
                        return <MyInput key={name} placeholder={placeholder} type={type}
                                        errorText={errors[name]} {...register(name)} {...props}/>
                    })}
                    <MyButton type={'submit'}>
                        {buttonText}
                    </MyButton>
                </form>
            </Paper>
        </div>
    );
};

export default Form;