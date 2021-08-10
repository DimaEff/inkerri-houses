import React from 'react';
import {Typography} from "@material-ui/core";

import ListItems from "../../../components/common/Text/ListItem";
import plusIcon from '../../../assets/plusIcon.svg'

const HouseItemIncludes = ({children}) => {
    return (
        <div>
            <Typography variant={'h5'} gutterBottom>В стоимость дома <span style={{color: '#B72A27'}}>включено:</span></Typography>
            <ListItems withTitle icon={plusIcon}>
                {children}
            </ListItems>
        </div>
    );
};

export default HouseItemIncludes;