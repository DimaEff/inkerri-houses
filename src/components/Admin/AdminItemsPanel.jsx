import React from 'react';
import {connect} from "react-redux";
import {IconButton} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import AddHouse from "./DialogsContent/AddHouse";
import {commonAPI} from "../../firebase/api";
import {firestoreCollections} from "../../utils/consts";
import {openCloseAdminDialogContent} from "../../store/adminReducer";
import AddNews from "./DialogsContent/AddNews";
import {getUser} from "../../selectors/user_selectors";


const getCollectionContentComponent = (collectionName) => {
    switch (collectionName) {
        case firestoreCollections.houses:
            return AddHouse;

        case firestoreCollections.news:
            return AddNews

        default:
            return
    }
}

const AdminItemsPanel = ({collectionName, item, user, openCloseAdminDialogContent}) => {
    return (
        <div>
            {user &&
            <>
                <IconButton
                    onClick={() => openCloseAdminDialogContent(true, getCollectionContentComponent(collectionName), item)}>
                    <CreateIcon/>
                </IconButton>
                <IconButton onDoubleClick={() => commonAPI.deleteDoc(firestoreCollections[collectionName], item.id, item.imagesURL)}>
                    <DeleteIcon />
                </IconButton>
            </>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: getUser(state),
})

export default connect(mapStateToProps, {openCloseAdminDialogContent})(AdminItemsPanel);