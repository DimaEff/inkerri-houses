import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: ({margin, column, jC, aI}) => ({
        display: 'flex',
        justifyContent: jC || 'center',
        alignItems: aI || 'center',
        flexFlow: !!column && 'column',

        marginBottom:  !!margin && '30px',

        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
        }
    }),
}))

const AppContainerItem = ({children, margin, column, jC, aI, ...props}) => {
    const styles = useStyles({margin, column, jC, aI});

    return (
        <Grid item className={styles.root} {...props}>
            {children}
        </Grid>
    );
};

export default AppContainerItem;