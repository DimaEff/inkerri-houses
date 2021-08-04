import React from 'react';

import AppContainer from "../common/AppContainer/AppContainer";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import TextIcon from "../common/Text/TextIcon";
import hoursImg from '../../assets/Frame26/24h.svg';
import builderImg from '../../assets/Frame26/builder.svg';
import penAndRulerImg from '../../assets/Frame26/penAndRuler.svg';
import infoImg from '../../assets/Frame26/info.svg';
import bricksWallImg from '../../assets/Frame26/bricksWall.svg';
import excavatorImg from '../../assets/Frame26/excavator.svg';


const Advantages = ({grey}) => {
    const advantages = [
        {
            icon: hoursImg,
            title: 'На связи 24/7',
            text: 'Наши специалисты проконсультируют вас в удобное для вас время',
        },
        {
            icon: builderImg,
            title: 'Квалифицированные специалисты ',
            text: 'В штате сотрудники с опытом строительства каркасных домов',
        },
        {
            icon: penAndRulerImg,
            title: 'Все виды консультаций',
            text: 'Ответим на вопросы по любому этапу: от подбора стройматериалов до подключения к коммуникациям',
        },
        {
            icon: infoImg,
            title: 'Объективная информация',
            text: 'Специалист укажет реальные сроки и стоимость работ и подробно распишет их',
        },
        {
            icon: bricksWallImg,
            title: 'Разложим все по полочкам ',
            text: 'Вместе с вами разработаем алгоритм действий',
        },
        {
            icon: excavatorImg,
            title: 'Уже начали строительство?',
            text: 'Подключимся на любом этапе',
        },
    ]

    return (
        <AppContainer grey={grey} title={'Преимущества работы с нами'}>
            {advantages.map(({icon, title, text}) => {
                return <AppContainerItem key={title} grey={!!grey} lg={4} md={4} sm={4} xs={6}>
                    <TextIcon icon={icon} title={title}>
                        {text}
                    </TextIcon>
                </AppContainerItem>
            })}
        </AppContainer>
    );
};

export default Advantages;