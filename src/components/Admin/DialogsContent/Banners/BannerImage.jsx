import React, {useState} from 'react';
import {IconButton, makeStyles} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import {commonAPI} from "../../../../firebase/api";
import {firestoreCollections} from "../../../../utils/consts";


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

const BannerImage = ({id, imagesURL, bannersCount}) => {
    const styles = useStyles();

    const [openDelete, setOpenDelete] = useState(false);

    const deleteBanner = () => commonAPI.deleteDoc(firestoreCollections.banners, id, imagesURL);

    return (
        <div className={styles.bannerRoot}
             onMouseEnter={() => setOpenDelete(true)}
             onMouseLeave={() => setOpenDelete(false)}
        >
            {
                openDelete &&
                <div className={styles.deleteButton}>
                    <IconButton disabled={bannersCount < 2} onDoubleClick={deleteBanner}>
                        <DeleteIcon color={'secondary'} fontSize={"large"}/>
                    </IconButton>
                </div>
            }
            <img src={imagesURL[0]}/>
        </div>
    )
}

export default BannerImage;