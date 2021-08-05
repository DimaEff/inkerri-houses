import React from 'react';
import {Container, Grid, makeStyles} from "@material-ui/core";

import AppContainerTitle from "./AppContainerTitle";
import {displaySize} from '../../../utils/consts';


const useStyles = makeStyles((theme => ({
    containerWrapper: ({grey}) => ({
        backgroundColor: !!grey && '#F3F2F2',
        minWidth: '280px',
    }),
    container: {
        paddingLeft: '2.6%',
        paddingRight: '2.6%',
        paddingTop: '4.8%',
        paddingBottom: '4.8%',

        [theme.breakpoints.down(displaySize)]: {
            paddingLeft: '34px',
            paddingRight: '34px',
            paddingTop: '22px',
            paddingBottom: '22px',
        },
    },
    grid: ({reverse}) =>  ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        paddingLeft: '3.7%',
        paddingRight: '3.7%',

        [theme.breakpoints.down(displaySize)]: {
            flexFlow: !!reverse && 'column-reverse',
            paddingLeft: '0px',
            paddingRight: '0px',
        },
    })
})))

const AppContainer = ({children, title, grey, reverse, withoutTitle, ...props}) => {
    const g = grey ? grey?.toString(): undefined;
    const styles = useStyles({grey: g, reverse})

    return (
        <div className={styles.containerWrapper}>
            <Container maxWidth={'lg'} className={styles.container} {...props}>
                {withoutTitle || <AppContainerTitle>{title}</AppContainerTitle>}
                <Grid container justifyContent={'center'} alignItems={'center'} className={styles.grid}>
                    {children}
                </Grid>
            </Container>
        </div>
    );
};

export default AppContainer;