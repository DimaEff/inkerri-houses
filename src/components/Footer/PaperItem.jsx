import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '220px',
        display: 'flex',
        justifyContent: 'space-between',

        '& div': {
            '&:not(:last-child)': {
                marginBottom: '15px',
            },
        }
    },
}))

const PaperItem = ({children, icon, alternative, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root} {...props}>
            <div style={{width: '20px', height: '20px'}}>
                <img src={icon} style={{width: '100%', height: '100%'}}/>
            </div>
            <div style={{width: '75%'}}>
                <Typography color={alternative ? 'secondary': 'primary'}>
                    {children}
                </Typography>
            </div>
        </div>
    );
};

export default PaperItem;