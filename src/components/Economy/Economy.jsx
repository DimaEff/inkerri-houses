import React from 'react';
import {makeStyles} from "@material-ui/core";

import AppContainerItem from "../common/AppContainer/AppContainerItem";
import AppContainer from "../common/AppContainer/AppContainer";
import MyButton from "../common/Button/MyButton";
import EconomyList from "./EconomyList";
import {displaySize} from "../../utils/consts";
import lineIcon from "../../assets/lineIcon.svg";
import cardIcon from '../../assets/Frame27/cardIcon.svg';
import timeIcon from '../../assets/Frame27/timeIcon.svg';


const useStyles = makeStyles(theme => ({
    button: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',

        [theme.breakpoints.down(displaySize)]: {
            justifyContent: 'center',
        },
    }
}))

const Economy = ({grey}) => {
    const styles = useStyles();

    return (
        <AppContainer title={'Ведь при наличии собственных чертежей Вы сэкономите'} grey={!!grey}>
            <AppContainerItem margin column lg={6} md={6} sm={12} xs={12}>
                <EconomyList title={'Время'} titleIcon={timeIcon} listIcon={lineIcon}>
                    {[
                        'Дом собирается по инструкции как «конструктор»',
                        'Нет необходимости «изобретать велосипед»',
                    ]}
                </EconomyList>
            </AppContainerItem>
            <AppContainerItem margin column lg={6} md={6} sm={12} xs={12}>
                    <EconomyList title={'Деньги'} titleIcon={cardIcon} listIcon={lineIcon}>
                        {[
                            'Все материалы уже учтены в смете проекта',
                        ]}
                    </EconomyList>
            </AppContainerItem>
            <AppContainerItem margin lg={12} md={12} sm={12} xs={12}>
                <div className={styles.button}>
                    <a href={"#help"}>
                        <MyButton>
                            Записаться на консультацию
                        </MyButton>
                    </a>
                </div>
            </AppContainerItem>
        </AppContainer>
    );
};

export default Economy;
