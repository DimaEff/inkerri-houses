import React from 'react';

import AppContainer from "../common/AppContainer/AppContainer";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
import proectingImg from '../../assets/Home/proecting.svg';
import buildingImg from '../../assets/Home/building.svg';
import consultingImg from '../../assets/Home/consulting.svg';
import {Typography} from "@material-ui/core";


const WeDo = ({grey}) => {
    return (
        <AppContainer title={'Мы занимаемся'} grey={!!grey}>
            <AppContainerItem margin column jC={'flex-end'} lg={4} md={4} sm={12} xs={12}>
                <div>
                    <img src={proectingImg}/>
                </div>
                <div style={{margin: '10px'}}>
                    <Typography>
                        Проектирование
                    </Typography>
                </div>
            </AppContainerItem>
            <AppContainerItem margin column jC={'flex-end'} lg={4} md={4} sm={12} xs={12}>
                <div>
                    <img src={buildingImg}/>
                </div>
                <div style={{margin: '10px'}}>
                    <Typography>
                        Строительство
                    </Typography>
                </div>
            </AppContainerItem>
            <AppContainerItem margin column jC={'flex-end'} lg={4} md={4} sm={12} xs={12}>
                <div>
                    <img src={consultingImg}/>
                </div>
                <div style={{margin: '10px'}}>
                    <Typography>
                        Консультирование
                    </Typography>
                </div>
            </AppContainerItem>
        </AppContainer>
    );
};

export default WeDo;