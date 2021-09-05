import React from 'react';

import s3 from '../../assets/BuildingSteps/s3.svg';
import s4 from '../../assets/BuildingSteps/s4.svg';
import s5 from '../../assets/BuildingSteps/s5.svg';
import s6 from '../../assets/BuildingSteps/s6.svg';
import s8 from '../../assets/BuildingSteps/s8.svg';
import BuildingStep from "./BuildingStep";
import allSteps from "../../assets/BuildingSteps/allSteps.png";


const BuildingStepsDesktop = () => {
    return (
        <div style={{position: 'relative', width: '100%', height: '620px', left: '-50px'}}>
            <BuildingStep step={'3'}
                          img={s3}
                          orientation={'v'}
                          rootTop={'50px'}
                          rootLeft={'300px'}
                          textLeft={'-190px'}
                          imgTop={'80px'}
                          imgLeft={'-30px'}
            >
                Закладка фундамента с встроенными инженерными коммуникациями
            </BuildingStep>
            <BuildingStep step={'4'}
                          img={s4}
                          orientation={'h'}
                          rootTop={'520px'}
                          rootLeft={'470px'}
                          imgTop={'-200px'}
                          imgLeft={'-195px'}
            >
                Возведение каркаса
            </BuildingStep>
            <BuildingStep step={'5'}
                          img={s5}
                          orientation={'v'}
                          rootTop={'90px'}
                          rootLeft={'630px'}
                          textLeft={'-165px'}
                          imgTop={'100px'}
                          imgLeft={'-180px'}
            >
                “Холодный контур”: ветрозащита, кровля, окна, двери
            </BuildingStep>
            <BuildingStep step={6}
                          img={s6}
                          orientation={'v'}
                          textLeft={'-140px'}
                          imgTop={'100px'}
                          imgLeft={'-215px'}
                          rootLeft={'850px'}
                          rootTop={'-35px'}
            >
                Обшивка фасада
            </BuildingStep>
            <BuildingStep step={8}
                          img={s8}
                          orientation={'v'}
                          imgTop={'-240px'}
                          imgLeft={'-230px'}
                          rootLeft={'1050px'}
                          rootTop={'400px'}
            >
                Монтаж инженерных сетей, контрутепление, внутрення отделка
            </BuildingStep>
            <div>
                <img style={{width: '100%'}} src={allSteps}/>
            </div>
        </div>
    );
};

export default BuildingStepsDesktop;