import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    item: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        marginBottom: '10px',
    },
    icon: {
        width: '20px',
        height: '20px',
        marginRight: '10px',
    },
    value: {
        position: 'absolute',
        width: '30%',
        right: '0px',
    }
}))

const ParamItem = ({icon, title, value, unit, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.item} {...props}>
            {icon && <div className={styles.icon}><img src={icon}/></div>}
            <div>
                <Typography>
                    {title}:
                </Typography>
            </div>
            <div className={styles.value}>
                <Typography color={'error'}>
                    {value} {unit}
                </Typography>
            </div>
        </div>
    )
}

const HouseItemParams = ({params, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root} {...props}>
            {params.map(param => <ParamItem {...param}/>)}
        </div>
    );
};

export default HouseItemParams;
