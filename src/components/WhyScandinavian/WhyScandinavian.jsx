import React, {useState} from 'react';
import {Dialog, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import * as yup from "yup";

import AppContainer from "../common/AppContainer/AppContainer";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import TextIcon from "../common/Text/TextIcon";
import MyButton from "../common/Button/MyButton";
import {Route} from "../../AppRouter/consts";
import {displaySize} from "../../utils/consts";
import energyImg from '../../assets/Building2/energy.svg';
import viewImg from '../../assets/Building2/view.svg';
import layoutImg from '../../assets/Building2/layout.svg';
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import {callOrderTemplate} from "../../emailSendler";


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

const useStyles = makeStyles(theme => ({
    button: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',

        '& button': {
            margin: '0px 20px',
        },

        [theme.breakpoints.down(displaySize)]: {
            flexFlow: 'column',
            alignItems: 'center',

            '& button': {
                margin: '10px 0px',
            },
        },
    }
}))

const WhyScandinavian = ({grey}) => {
    const styles = useStyles();
    const history = useHistory();

    const [open, setOpen] = useState(false);

    const advantages = [
        {
            icon: energyImg,
            title: 'Энергоэффективность',
            text: 'Тепло сохраняется в доме и все такое, что-то тут еще будет написано',
        },
        {
            icon: viewImg,
            title: 'Стильный внешний вид',
            text: 'Стильный внешний вид будет привлекать взгляды ваших соседей и друзей, а также радовать ваших близких',
        },
        {
            icon: layoutImg,
            title: 'Продуманная планировка',
            text: 'Планировка дома полностью согласовывается с заказчиком, и продумывается на этапе проектирования',
        },
    ]

    return (
        <AppContainer grey={grey} title={'Почему именно скандинавские дома?'}>
            {advantages.map(({icon, title, text}) => {
                return <AppContainerItem margin key={title} grey={grey ? grey.toString() : undefined} lg={4} md={4} sm={8}
                                         xs={12}>
                    <TextIcon minHeight={'350px'} icon={icon} title={title}>
                        {text}
                    </TextIcon>
                </AppContainerItem>
            })}
            <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                <div className={styles.button}>
                    <div>
                        <MyButton action={() => setOpen(true)}>
                            Узнать подробности
                        </MyButton>
                        <Dialog scroll={'body'} open={open} onClose={() => setOpen(false)}>
                            <FeedbackForm  template={callOrderTemplate}
                                          schema={schema} action={() => setOpen(false)} buttonText={'Заказать звонок'}>
                                {[
                                    {name: 'username', placeholder: 'Имя*'},
                                    {name: 'surname', placeholder: 'Фамилия*'},
                                    {name: 'email', placeholder: 'Email*'},
                                    {name: 'phone', placeholder: 'Номер телефона*'},
                                ]}
                            </FeedbackForm>
                        </Dialog>
                    </div>

                    <MyButton action={() => history.push(Route())} variant={'secondary'}>
                        Посмотреть проекты
                    </MyButton>
                </div>
            </AppContainerItem>
        </AppContainer>
    );
};

export default WhyScandinavian;