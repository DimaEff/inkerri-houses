import React from 'react';

import AppContainer from "../common/AppContainer/AppContainer";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import TextIcon from "../common/Text/TextIcon";
import likeIcon from '../../assets/Home/like.svg';
import fingerIcon from '../../assets/Home/finger.svg';
import universityIcon from '../../assets/Home/university.svg';
import groupIcon from '../../assets/Home/group.svg';


const WhyWe = ({grey}) => {
    const advantages = [
        {
            icon: likeIcon,
            title: 'Занимаемся любимым делом',
            text: 'Работаем не только ради денег, но и получаем удовольствие от процесса и результата работы.',
        },
        {
            icon: fingerIcon,
            title: 'Не стремимся к количеству в ущерб качества',
            text: 'Лучше выполним меньше заказов, но выполним их так, чтобы результат был отличным.',
        },
        {
            icon: universityIcon,
            title: 'Профессионалы своего дела',
            text: 'В нашей компании работают архитекторы и инженеры с профильным высшим образованием, а также высококвалифицированные рабочие',
        },
        {
            icon: groupIcon,
            title: 'Постоянно развиваемся',
            text: 'Следим за трендами в технологиях и дизайне. Посещаем выставки, семинары, курсы повышения квалификации. Стремимся к тому, чтобы каждый следующий проект и дом были лучше предыдущего.',
        },
    ]

    const style = {
        minHeight: '470px',

        '@media(max-width: 1280px)': {
            minHeight: '250px'
        }
    }

    return (
        <AppContainer grey={grey} title={'Преимущества работы с нами'}>
            {advantages.map(({icon, title, text}) => {
                return <AppContainerItem key={title} grey={grey ? grey.toString(): undefined} lg={3} md={6} sm={6} xs={12}>
                    <TextIcon minHeight={'470px'} icon={icon} title={title}>
                        {text}
                    </TextIcon>
                </AppContainerItem>
            })}
        </AppContainer>
    );
};

export default WhyWe;