import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import {displaySize} from "../../../utils/consts";


const useStyles = makeStyles(theme => ({
    item: {
        display: 'flex',

        minHeight: '20px',
        width: '100%',
        fontSize: '14px',

        '&:not(:last-child)': {
            marginBottom: '30px',
        },

        [theme.breakpoints.down(displaySize)]: {
            '&:not(:last-child)': {
                marginBottom: '15px',
            },
        },
    },
    icon: {
        marginRight: '20px',
        height: '20px',
        width: '20px',

        [theme.breakpoints.down(displaySize)]: {
            marginRight: '14px',
        },
    }
}))

const ListItems = ({children, icon, ...props}) => {
    const styles = useStyles();

    return (
        <div {...props}>
            {children.map(text => {
                return (
                    <div key={text} className={styles.item}>
                        <img className={styles.icon} src={icon}/>
                        <div>
                            <Typography>
                                {text}
                            </Typography>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ListItems;