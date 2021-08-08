import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

import TextContainer from "../common/AppContainer/TextContainer";
import ListItems from "../common/Text/ListItem";
import {displaySize} from "../../utils/consts";


const useStyles = makeStyles(theme => ({
    listWrapper: {
        display: 'flex',
        flexFlow: 'column',

        width: '90vw',
        minWidth: '279px',
        maxWidth: '450px',
        minHeight: '150px',

        [theme.breakpoints.down(displaySize)]: {
            minHeight: '0px',
        },
    },
    listTitle: {
        display: 'flex',
        marginBottom: '30px',

        '& img': {
            width: '35px',
            height: '35px',
            marginRight: '15px',

            [theme.breakpoints.down(displaySize)]: {
                width: '20px',
                height: '20px',
                marginRight: '10px',
            },
        },

        '& p': {
            fontSize: '20px',
            fontWeight: 'bold',

            [theme.breakpoints.down(displaySize)]: {
                fontSize: '16px',
                fontWeight: 'normal',
            },
        }
    },
    list: {
        marginLeft: '30px',

        [theme.breakpoints.down(displaySize)]: {
            marginLeft: '15px',
        },

    },
}))

const EconomyList = ({children, title, titleIcon, listIcon, ...props}) => {
    const styles = useStyles();

    return (
        <TextContainer {...props}>
            <div className={styles.listWrapper}>
                <div className={styles.listTitle}>
                    <img src={titleIcon}/>
                    <Typography>
                        {title}
                    </Typography>
                </div>
                <div className={styles.list}>
                    <TextContainer>
                        <ListItems icon={listIcon}>
                            {children}
                        </ListItems>
                    </TextContainer>
                </div>
            </div>
        </TextContainer>
    );
};

export default EconomyList;
