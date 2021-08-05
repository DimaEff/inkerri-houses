import React from 'react';

import NavText from "../common/Text/NavText";
import {displaySize} from "../../utils/consts";
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {

    },
    menu: {
        display: 'flex',
        flexFlow: 'column',

        '& div': {
            marginBottom: '5px',
        },

        '& p': {
            fontSize: '18px',
            fontWeight: 'bold',

            [theme.breakpoints.down(displaySize)]: {
                fontSize: '16px',
            },
        }
    }
}))

const MenuMini = ({paths, ...props}) => {
    const styles = useStyles();

    return (
        <div>
            <div className={styles.menu}>
                {
                    paths.map(({name, path}) => {
                        return (
                            <div key={path}>
                                <NavText color={'#3E3E3E99'} path={path}>
                                    {name}
                                </NavText>
                            </div>
                        )})
                }
            </div>
        </div>
    );
};

export default MenuMini;