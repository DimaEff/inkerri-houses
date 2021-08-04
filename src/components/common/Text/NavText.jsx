import React from 'react';
import {makeStyles} from "@material-ui/core";

import Link from "./Link";


const useStyles = makeStyles((theme) => ({
    root: (color) => ({
        color: color || '#fff',
        fontSize: '16px',
    })
}))

const NavText = ({children, path, color, ...props}) => {
    const styles = useStyles(color);

    return (
        <div className={styles.root} {...props}>
            <Link to={path}>
                {children}
            </Link>
        </div>
    );
};

export default NavText;