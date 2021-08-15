import React from 'react';
import {makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";

import AppContainer from "../common/AppContainer/AppContainer";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import TextIcon from "../common/Text/TextIcon";
import MyButton from "../common/Button/MyButton";
import {getHousesRoute} from "../../AppRouter/consts";
import {displaySize} from "../../utils/consts";
import energyImg from '../../assets/Building2/energy.svg';
import viewImg from '../../assets/Building2/view.svg';
import layoutImg from '../../assets/Building2/layout.svg';


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
                    <MyButton>
                        Узнать подробности
                    </MyButton>
                    <MyButton action={() => history.push(getHousesRoute())} variant={'secondary'}>
                        Посмотреть проеты
                    </MyButton>
                </div>
            </AppContainerItem>
        </AppContainer>
    );
};

export default WhyScandinavian;