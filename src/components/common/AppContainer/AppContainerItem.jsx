import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: ({margin, column, jC, aI, fullHeight}) => ({
        display: 'flex',
        justifyContent: jC || 'center',
        alignItems: aI || 'center',
        flexFlow: !!column && 'column',

        marginBottom:  !!margin && '30px',
        // height: fullHeight && '100vh',

        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
        }
    }),
}))

const AppContainerItem = ({children, margin, column, jC, aI, fullHeight, ...props}) => {
    const styles = useStyles({margin, column, jC, aI, fullHeight});

    return (
        <Grid item className={styles.root} {...props}>
            {children}
        </Grid>
    );
};

export default AppContainerItem;