import React, {useContext} from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {makeStyles, Paper} from "@material-ui/core";

import sendEmail, {callOrderTemplate} from "../../emailSendler";
import { displaySize} from '../../utils/consts'
import MyButton from "../common/Button/MyButton";
import {AlertContext} from "../../AppContainer";


// Я понимаю, что вот эту форму делать так стремно, но:
// Крч, я хер знает, как по-нормальному сделать эту форму.
// Все заново писать не хочется, но и нормально стили применить для того, что есть(FeedbackForm, MyInput, MyButton), не получается,
// а все переделывать там и писать кучу ненужных другим компонентам атрибутов не хочется
// Надеюсь, это никому не понадобится(особенно мне)
const schema = yup.object().shape({
    username: yup.string()
        .required('Обязательное поле')
        .min(3, 'Минимум 3 символа')
        .max(12, 'Максимум 12 символов'),
    phone: yup.string()
        .required('Обязательное поле')
        .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, 'Некорректный номер')
});

const useStyles = makeStyles((theme => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '204px',
        padding: '22px 15px',
        borderRadius: '20px',
        boxShadow: '0px 2px 20px 0px #00000040',

        [theme.breakpoints.down(displaySize)]: {
            width: '80vw',
            maxWidth: '280px',
            minWidth: '200px',
            height: '70vw',
            maxHeight: '230px',
            minHeight: '170px',
        },
    },
    form: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',

        width: '87%',

        '& div': {
            marginBottom: '22px',
        },
        '& *': {
            fontFamily: ['"Noto Sans"',].join(','),
        }
    },
    inputWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        height: '33px',
        width: '100%',
        borderRadius: '5px',
        backgroundColor: '#EFF0F6',
    },
    input: {
        border: 'none',
        outline: 'none',

        height: '100%',
        width: '80%',
        fontSize: '14px',
        backgroundColor: 'inherit',

        '&::placeholder': {
            fontSize: '14px',
        },
    },
    errorText: {
        position: 'absolute',
        bottom: '-40px',

        fontSize: '12px',
        color: 'rgba(255, 0, 0, .7)',
        textAlign: 'center',
    },
})))

const FeedbackFormMini = () => {
    const styles = useStyles();

    const TryToSubmitWithAlerts = useContext(AlertContext);

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data, e) => {
        const result = await sendEmail(callOrderTemplate)(data, e);
        reset(result);
    }

    const buttonStyle = {
        borderRadius: '30px',
        height: '27px',
        fontSize: '14px',
        maxWidth: '119px',
        paddingLeft: '10px',
        paddingRight: '10px',
    };

    return (
        <div>
            <a name={"help"}/>
            <Paper elevation={0} className={styles.paper}>
                <form onSubmit={handleSubmit(TryToSubmitWithAlerts(onSubmit))} className={styles.form}>
                    <input type="hidden" name="contact_number" />
                    <div className={styles.inputWrapper}>
                        <input type="text" placeholder={'Имя*'} className={styles.input} autoComplete={'off'} {...register('username')}/>
                        <div className={styles.errorText}>{errors.username?.message}</div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="text" placeholder={'Номер телефона*'} className={styles.input} autoComplete={'off'} {...register('phone')}/>
                        <div className={styles.errorText}>{errors.phone?.message}</div>
                    </div>
                    <MyButton type={'submit'} style={buttonStyle}>
                       Отправить
                    </MyButton>
                </form>
            </Paper>
        </div>
    );
};

export default FeedbackFormMini;