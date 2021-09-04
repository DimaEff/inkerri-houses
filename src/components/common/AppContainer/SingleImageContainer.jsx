import React from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: ({h, w}) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: w || '100%',
        height: h || '100%',
        overflow: 'hidden',

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    })
}))

const SingleImageContainer = ({children, w, h}) => {
    const styles = useStyles({w, h});

    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default SingleImageContainer;
