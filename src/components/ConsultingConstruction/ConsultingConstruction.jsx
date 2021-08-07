import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import AppContainer from "../common/AppContainer/AppContainer";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import ListItems from "../common/Text/ListItem";
import questionIcon from '../../assets/questionIcon.svg';
import questionImg from '../../assets/Frame26/questionImg2.svg';
import MyButton from "../common/Button/MyButton";
import TextContainer from "../common/Text/TextContainer";
import {displaySize} from "../../utils/consts";


const useStyles = makeStyles(theme => ({
    button: {
        display: 'flex',
        justifyContent: 'flex-start',
        width : '100%',

        [theme.breakpoints.down(displaySize)]: {
            justifyContent: 'center',
        },
    }
}))

const ConsultingConstruction = ({grey}) => {
    const styles = useStyles();

    return (
        <AppContainer title={'Консультации по строительству'} grey={!!grey}>
            <AppContainerItem margin column aI={'flex-start'} lg={5} md={5} sm={12} xs={12}>
                <TextContainer>
                    <div>
                        <Typography>
                            Каждый, кто начинал строительство загородного дома, сталкивался с огромным количеством вопросов:
                        </Typography>
                    </div>
                    <ListItems icon={questionIcon}>
                        {[
                            'Какой участок выбрать?',
                            'На каком фундаменте строить?',
                            'Кто будет строить?',
                            'А нужен ли проект?',
                            'Индивидуальный или типовой проект?',
                            'И так далее, и тому подобное',
                        ]}
                    </ListItems>
                    <div>
                        <Typography>
                            Ответов на все эти вопросы множество, но зачастую они противоречат друг-другу.
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            <span>Как быть в такой ситуации? </span>
                            <span style={{color: '#B72A27', fontWeight: 'bold'}}>Обратиться к профессионалам.</span>
                        </Typography>
                    </div>
                </TextContainer>
            </AppContainerItem>
            <AppContainerItem margin lg={7} md={7} sm={12} xs={12}>
                <img src={questionImg}/>
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

export default ConsultingConstruction;