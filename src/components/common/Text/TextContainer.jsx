import React from 'react';
import {makeStyles} from "@material-ui/core";

import {displaySize} from "../../../utils/consts";


const useStyles = makeStyles((theme) => ({
    root: {
        '& div': {
            '&:not(:last-child)': {
                marginBottom: '30px',
            },

            [theme.breakpoints.down(displaySize)]: {
                '&:not(:last-child)': {
                    marginBottom: '15px',
                },
            },
        }
    }
}))

const TextContainer = ({children}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default TextContainer;