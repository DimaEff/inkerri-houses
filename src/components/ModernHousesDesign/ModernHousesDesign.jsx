import React from 'react';
import {Typography} from "@material-ui/core";

import AppContainer from "../common/AppContainer/AppContainer";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import TextContainer from "../common/Text/TextContainer";
import ListItems from "../common/Text/ListItem";
import doubleCheckIcon from "../../assets/doubleCheckIcon.svg";
import twoHousesImg from "../../assets/Frame27/twoHouses.jpg";


const ModernHousesDesign = ({grey}) => {
    return (
        <AppContainer title={'Современное проектирование домов'} grey={!!grey}>
            <AppContainerItem margin column aI={'flex-start'} lg={6} md={6} sm={12} xs={12}>
                <TextContainer>
                    <div>
                        <Typography>
                            На нашем сайте представлены проекты домов, разработанные индивидуально для наших заказчиков. Вы можете выбрать один из них. Далее мы будем прорабатывать его, исходя из особенностей вашего участка, ландшафта и прочих параметров.
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            Если не один из типовых проектов, представленных на нашем сайте, вам не подходит, с удовольствием разработаем для вас индивидуальный проект, соответствующий всем вашим запросам и представлениям о доме вашей мечты.
                        </Typography>
                    </div>
                    <div>
                        <Typography style={{fontWeight: 'bold'}}>
                            <span style={{color: '#B72A27', fontWeight: 'bold'}}>ВАЖНО </span>
                            <span>понимать</span>
                        </Typography>
                    </div>
                    <ListItems icon={doubleCheckIcon}>
                        {[
                            'Качественный проект – 80% успеха постройки дома.',
                            'Подойдите к проектированию со всей серъезностью.',
                            'Экономьте не на проектировании – экономьте с помощью проектирования!',
                        ]}
                    </ListItems>
                </TextContainer>
            </AppContainerItem>
            <AppContainerItem margin lg={6} md={6} sm={12} xs={12}>
                <img src={twoHousesImg}/>
            </AppContainerItem>
        </AppContainer>
    );
};

export default ModernHousesDesign;
