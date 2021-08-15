import React from 'react';
import {Typography} from "@material-ui/core";

import useGetDoc from "../../../hooks/useGetDoc";
import {firestoreCollections} from "../../../utils/consts";
import AppContainer from "../../../components/common/AppContainer/AppContainer";
import AppContainerItem from "../../../components/common/AppContainer/AppContainerItem";
import HouseItemCarousel from "./HouseItemCarousel";
import HouseItemInfo from "./HouseItemInfo";
import HouseItemIncludes from "./HouseItemIncludes";


const HouseItemPage = ({houseId}) => {
    const houseItem = useGetDoc(firestoreCollections.houses, houseId);

    return (
        <div>
            {
                houseItem === null ?
                    <Typography style={{margin: '50px'}} align={"center"} variant={'h4'} color={'error'}>
                        Элемент не найден
                    </Typography>:
                    houseItem && <AppContainer title={houseItem.title}>
                        <AppContainerItem  lg={7} md={7} sm={12} xs={12}>
                            <HouseItemCarousel>
                                {houseItem.imagesURL}
                            </HouseItemCarousel>
                        </AppContainerItem>
                    <AppContainerItem margin aI={'flex-start'} lg={5} md={5} sm={12} xs={12}>
                        <HouseItemInfo houseItem={houseItem}/>
                    </AppContainerItem>
                    <AppContainerItem jC={'flex-start'} lg={12} md={12} sm={12} xs={12}>
                        <HouseItemIncludes>
                            {houseItem.includes}
                        </HouseItemIncludes>
                    </AppContainerItem>
                    </AppContainer>
            }
        </div>
    );
};

export default React.memo(HouseItemPage);