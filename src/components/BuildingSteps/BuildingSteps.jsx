import React from 'react';

import allSteps from '../../assets/BuildingSteps/allSteps.png';
import {makeStyles} from "@material-ui/core";
import AppContainer from "../common/AppContainer/AppContainer";


const useStyles = makeStyles(theme => ({
    img: {
        width: '100%',
    }
}))

const BuildingSteps = () => {
    const styles = useStyles();

    return (
        <AppContainer title={'Этапы строительства'}>
            <div>
                <img style={{maxWidth: '100%'}} src={allSteps}/>
            </div>
        </AppContainer>
    );
};

export default BuildingSteps;