import React, {useState} from 'react';
import {IconButton, makeStyles} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";


const useStyles = makeStyles(theme => ({
    bannerRoot: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '30px',
    },
    deleteButton: {
        position: 'absolute',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .3)',

    }
}))

const AdminSliderImage = ({imageURL, bannersCount, deleteFunction}) => {
    const styles = useStyles();

    const [openDelete, setOpenDelete] = useState(false);

    const handleDelete = () => {

    }

    return (
        <div className={styles.bannerRoot}
             onMouseEnter={() => setOpenDelete(true)}
             onMouseLeave={() => setOpenDelete(false)}
        >
            {
                openDelete &&
                <div className={styles.deleteButton}>
                    <IconButton disabled={bannersCount && bannersCount < 2} onDoubleClick={deleteFunction}>
                        <DeleteIcon color={'secondary'} fontSize={"large"}/>
                    </IconButton>
                </div>
            }
            <img src={imageURL}/>
        </div>
    )
}

export default AdminSliderImage;