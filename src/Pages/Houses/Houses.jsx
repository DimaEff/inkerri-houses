import React, {useState} from 'react';
import {Grid, Typography, Box, Container} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';

import AppContainer from "../../components/common/AppContainer/AppContainer";
import AppContainerItem from "../../components/common/AppContainer/AppContainerItem";
import HouseItem from "../../components/common/HousesItems/HouseItem";
import FilterContainer from "../../components/common/HousesItems/Filter/FilterContainer";
import FloorsFilter from "../../components/common/HousesItems/Filter/FloorsFilter";


const Houses = ({prices, squares, filteredHouses, setFilterHousesValues}) => {
    const [floors, setFloors] = useState('all');

    const pageSize = 3;
    const pagesCount = Math.ceil(filteredHouses.length / pageSize);
    const [currentPage, setCurrentPage] = useState(1);
    const startPage = (currentPage - 1) * pageSize;

    const onChangePage = (e, page) => {
        setCurrentPage(page);
    }

    return (
        <AppContainer jC={'flex-start'} aI={'flex-start'} title={'Проекты домов'}>
            <AppContainerItem margin lg={12} md={12} sm={12} xs={12}>
                <FloorsFilter outsideFilter floors={floors} setFloors={setFloors} onFilter={setFilterHousesValues}/>
            </AppContainerItem>
            <AppContainerItem lg={3} md={3} sm={12} xs={12}>
                <FilterContainer prices={prices} squares={squares} floors={floors} setFloors={setFloors}
                                 onFilter={setFilterHousesValues}/>
            </AppContainerItem>
            <AppContainerItem jC={'flex-start'} lg={9} md={9} sm={12} xs={12}>
                <Grid container>
                    {filteredHouses.length > 0 ?
                        filteredHouses.slice(startPage, startPage + pageSize).map(house => <AppContainerItem
                            key={house.title} lg={4} md={6} sm={6} xs={12}>
                            <HouseItem shadow houseItem={house}/>
                        </AppContainerItem>):
                        <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                            <Typography variant={'h5'} color={'error'}>Результатов не найдено</Typography>
                        </AppContainerItem>
                    }
                    <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                        {pagesCount > 1 &&
                        <Pagination count={pagesCount}
                                    page={currentPage}
                                    onChange={onChangePage}
                                    shape={"rounded"}
                                    color={'primary'}
                        />}
                    </AppContainerItem>
                </Grid>
            </AppContainerItem>
        </AppContainer>
    );
};

export default Houses;