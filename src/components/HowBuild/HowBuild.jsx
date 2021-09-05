import React from 'react';
import {ImageList, ImageListItem, makeStyles, Typography} from "@material-ui/core";

import AppContainerItem from "../common/AppContainer/AppContainerItem";
import TextContainer from "../common/AppContainer/TextContainer";
import PaperItem from "../Footer/PaperItem";
import AppContainer from "../common/AppContainer/AppContainer";
import MyButton from "../common/Button/MyButton";
import {displaySize} from "../../utils/consts";
import home1Img from '../../assets/Home/home1.jpg';
import home2Img from '../../assets/Home/home2.jpg';
import home3Img from '../../assets/Home/home3.jpg';
import phoneIcon from "../../assets/Footer/phone.svg";
import mailIcon from "../../assets/Footer/mail.svg";
import timeIcon from "../../assets/Footer/time.svg";


const useStyles = makeStyles((theme) => ({
    contacts: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: '100px',

        [theme.breakpoints.down(1220)]: {
            minHeight: '110px',
        },

        [theme.breakpoints.down(displaySize)]: {
            justifyContent: 'center',
            margin: '20px 0px',
        },
    },
    contactItem: {
        position: 'absolute',
        top: '-1.3vw',

        [theme.breakpoints.down(1220)]: {
            top: '-2.5vw',
        },

        [theme.breakpoints.down(displaySize)]: {
            position: 'static',
        },
    },
    img: {
        margin: '14px',
        height: '100%',
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-start',
        width : '100%',
        maxWidth: '100%',

        [theme.breakpoints.down(displaySize)]: {
            justifyContent: 'center',
        },
    }
}))

const HowBuild = ({grey}) => {
    const styles = useStyles();

    const items = [
        {icon: phoneIcon, text: '+ 7 (931) 308-57-59'},
        {icon: mailIcon, text: 'inkerri@mail.ru'},
        {icon: timeIcon, text: 'Пн-Пт с 10:00 - 20:00\nСб 12:00 - 18:00'},
    ]

    return (
        <AppContainer title={'Как мыстроим?'} grey={!!grey}>
            <AppContainerItem margin column aI={'flex-start'} lg={5} md={5} sm={12} xs={12}>
                <TextContainer>
                    <div>
                        <Typography>
                            Наша компания специализируется на строительстве каркасных домов “<span style={{color: '#B72A27', fontWeight: 'bold'}}>под ключ </span>”.
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            Мы строим дома по скандинавской технологии. Перенимаем опыт наших скандинавских соседей, начиная от проекта, выбора материалов, конструктивных решений и заканчивая внешним видом вашего будущего дома.
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            Нам не все равно, как будет выглядеть ваш дом. И поэтому мы уделяем особое внимание внешнему облику дома.
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            В своей работе мы опираемся на знания, полученные в строительных ВУЗах.  А это значит, что строительство - это наш осознанный выбор.
                        </Typography>
                    </div>
                    <div>
                        <Typography color={"error"}>
                            Нам нравится то, чем мы занимаемся! И нам не стыдно за свою работу!
                        </Typography>
                    </div>
                </TextContainer>
            </AppContainerItem>
            <AppContainerItem lg={7} md={7} sm={12} xs={12}>
                <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', width: '80vw', maxWidth: '500px', minWidth: '279px'}}>
                    <div style={{display: 'flex', maxWidth: '100%'}}>
                        <div className={styles.img}>
                            <img src={home1Img}/>
                        </div>
                        <div className={styles.img}>
                            <img src={home2Img}/>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <img src={home3Img}/>
                    </div>
                </div>
            </AppContainerItem>
            <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                <div className={styles.contacts}>
                    <div className={styles.contactItem}>
                        {items.map(({icon, text}) => <PaperItem key={text} icon={icon}>
                            {text}
                        </PaperItem>)}
                    </div>
                </div>
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

export default HowBuild;
