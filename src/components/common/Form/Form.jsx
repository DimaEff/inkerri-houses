import React, {useContext} from 'react';
import {makeStyles} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import MyInput from "./MyInput";
import MyButton from "../Button/MyButton";
import MyPaper from "../AppContainer/MyPaper";
import {AlertContext} from "../../../App";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

const Form = ({children, onSubmit, schema, buttonText, antiSpam, action, defaultValues, ...props}) => {
    const styles = useStyles();

    const {setOpenSuccess, setOpenFailed} = useContext(AlertContext);

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    })

    const onHandleSubmit = async (data, e) => {
        try {
            const result = await onSubmit(data, e);
            reset(result);
            setOpenSuccess(true);
        } catch (error) {
            setOpenFailed(true);
        }
    }

    return (
        <div className={styles.root}>
            <MyPaper mW={'400px'} {...props}>
                <form onSubmit={handleSubmit(onHandleSubmit)} className={styles.form}>
                    {antiSpam}
                    {children?.map(({name, ...props}) => {
                        return <MyInput key={name} errorText={errors[name]} {...register(name)} {...props}/>
                    })}
                    <MyButton action={action} type={'submit'}>
                        {buttonText}
                    </MyButton>
                </form>
            </MyPaper>
        </div>
    );
};

export default Form;