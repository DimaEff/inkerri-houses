import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import AppContainerItem from "../common/AppContainer/AppContainerItem";
import TextContainer from "../common/Text/TextContainer";
import ListItems from "../common/Text/ListItem";
import {displaySize} from "../../utils/consts";
import doubleCheckIcon from "../../assets/doubleCheckIcon.svg";


const useStyles = makeStyles(theme => ({
    textWrapper: {
        position: 'relative',

        display: 'flex',
        alignItems: 'center',
    },
    step: {
        position: 'absolute',
        left: '-45px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '50px',
        height: '50px',
        borderRadius: '50%',

        backgroundColor: '#B72A27',

        '& p': {
            fontSize: '30px',
            fontWeight: 'bolder',

            [theme.breakpoints.down(displaySize)]: {
                fontSize: '20px',
            },
        },

        [theme.breakpoints.down(displaySize)]: {
            left: '-20px',
            width: '37px',
            height: '37px',
        },
    },
    text: {
        marginLeft: '30px',
    },
    list: {
        maxWidth: '430px',

        [theme.breakpoints.down(displaySize)]: {
            width: '90vw',
            maxWidth: '700px',
        },
    },
    images: {
        display: 'flex',

        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
        },

        [theme.breakpoints.down(displaySize)]: {
            height: '40vw',
            minHeight: '100px',
            maxHeight: '200px',

            '& div:last-child': {
                justifySelf: 'flex-end',
                alignSelf: 'flex-end',
            }
        },
    },
}))

const Step = ({children, step, text, listTitle, image1, image2, withoutMargin}) => {
    const styles = useStyles();

    return (
        <>
            <AppContainerItem margin column aI={'flex-start'} lg={12} md={12} sm={9} xs={12}>
                <div className={styles.textWrapper}>
                    <div className={styles.step}>
                        <Typography color={'secondary'}>
                            {step}
                        </Typography>
                    </div>
                    <div className={styles.text}>
                        <TextContainer>
                            <Typography style={{'& p': {fontWeight: 'bold'}}}>
                                <p>
                                    {text}
                                </p>
                            </Typography>
                        </TextContainer>
                    </div>
                </div>
            </AppContainerItem>
            <AppContainerItem margin lg={6} md={6} sm={12} xs={12}>
                <div className={styles.list}>
                    <TextContainer>
                        <div>
                            <Typography>
                                {listTitle}
                            </Typography>
                        </div>
                        <div>
                            <ListItems icon={doubleCheckIcon}>
                                {children}
                            </ListItems>
                        </div>
                    </TextContainer>
                </div>
            </AppContainerItem>
            <AppContainerItem margin={!withoutMargin} lg={6} md={6} sm={12} xs={12}>
                <div className={styles.images}>
                    <div>
                        <img src={image1}/>
                    </div>
                    <div>
                        <img src={image2}/>
                    </div>
                </div>
            </AppContainerItem>
        </>
    );
};

export default Step;
