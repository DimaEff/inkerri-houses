import React from 'react';

import AppContainerItem from "../common/AppContainer/AppContainerItem";
import HouseItem from "../common/HousesItems/HouseItem";
import MyButton from "../common/Button/MyButton";
import Link from "../common/Text/Link";
import {HouseRoute} from "../../AppRouter/consts";


const HousesMiniMobile = ({houses}) => {
    return (
        <div>
            {
                houses.slice(0, 3).map(houseItem => <AppContainerItem key={houseItem.title} margin lg={12} md={12} sm={12} xs={12}>
                        <HouseItem variant={'secondary'} houseItem={houseItem} shadow/>
                    </AppContainerItem>
                )}
                <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                    <Link to={HouseRoute()}>
                        <MyButton variant={'secondary'} oval>
                            Все проекты
                        </MyButton>
                    </Link>
                </AppContainerItem>
        </div>
    );
};

export default HousesMiniMobile;