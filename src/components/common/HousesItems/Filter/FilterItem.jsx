import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column',

        width: '80%',
        marginBottom: '20px',
        borderBottom: '1px solid #B72A27',

        '& div': {
            marginBottom: '5px',
        }
    },
    title: {
        width: '100%',
        padding: '0px 5px',
        fontSize: '16px',
        fontWeight: 600,

        '& span': {
            color: '#B72A27',
        },
    }
}))

const FilterItem = ({children, title, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root} {...props}>
            <div>
                <Typography className={styles.title}>
                    {title.split(' ')[0]} <span>{title.split(' ')[1]} ></span>
                </Typography>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default FilterItem;