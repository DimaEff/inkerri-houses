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
        right: '0px',

        display: 'flex',
        justifyContent: 'flex-start',
        width: '30%',
        minWidth: '90px',
        marginLeft: '2px',
    }
}))

const ParamItem = ({icon, title, value, unit, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.item} {...props}>
            {icon && <div className={styles.icon}><img src={icon}/></div>}
            <div style={{marginRight: '5px'}}>
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
            {params.map(param => <ParamItem key={param.title} {...param}/>)}
        </div>
    );
};

export default HouseItemParams;
