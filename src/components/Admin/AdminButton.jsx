import React from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 5,
        position: 'fixed',
        top: '70px',
        right: '20px',

        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#B72A27',
        boxShadow: '0px 2px 30px 4px rgba(0, 0, 0, 0.52)',
    }
}))

const AdminButton = ({setOpenMenu}) => {
    const styles = useStyles();

    return (
        <div onClick={() => setOpenMenu(true)} className={styles.root}/>
    );
};

export default AdminButton;