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

const MenuMini = ({paths, menuNum, ...props}) => {
    const styles = useStyles();

    const filterPaths = paths?.filter(path => path.menuNum === menuNum);

    return (
        <div {...props}>
            <div className={styles.menu}>
                {
                    filterPaths.map(({name, path, menuPath}) => {
                        return (
                            <div key={path}>
                                <NavText color={'#3E3E3E99'} path={path} menuPath={menuPath}>
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