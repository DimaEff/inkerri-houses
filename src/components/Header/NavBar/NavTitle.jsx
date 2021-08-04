import React from 'react';

import NavTitleText from "./NavTitleText";
import {makeStyles, Typography} from "@material-ui/core";
import {displaySize} from "../../../utils/consts";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
    },
    title: {
        fontSize: '35px',
        fontWeight: 'bolder',
        marginBottom: '10px',

        [theme.breakpoints.down(displaySize)]: {
            fontSize: '16px',
        },
    },
    text: {
        display: 'flex',

        '& div': {
            marginRight: '30px',

            [theme.breakpoints.down(displaySize)]: {
                marginRight: '10px',
            },
        }
    }
}))

const NavTitle = ({children, title, ...props}) => {
    const styles = useStyles();

    return (
        <div className={styles.root} {...props}>
            <div>
                <Typography className={styles.title} color={'secondary'}>
                    {title}
                </Typography>
            </div>
            <div className={styles.text}>
                {
                    children.map(({text, color}) => {
                        return (
                            <div key={text}>
                                <NavTitleText color={color}>
                                    {text}
                                </NavTitleText>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default NavTitle;