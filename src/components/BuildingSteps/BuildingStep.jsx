import React from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

}))

const BuildingStep = ({children, img, ...props}) => {
    const styles = useStyles();

    return (
        <div {...props}>
            <div>
                <img src={img}/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default BuildingStep;