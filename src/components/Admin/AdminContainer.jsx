import React from 'react';
import {connect} from "react-redux";

import {logout} from "../../store/userReducer";
import {getUser} from "../../selectors/user_selectors";
import {commonAPI} from "../../firebase/api";
import {firestoreCollections} from "../../utils/consts";
import {toNumber} from "../../utils/helpers";
import Admin from "./Admin";
import {openCloseAdminDialogContent} from "../../store/adminReducer";
import {getDefaultValues, getDialogContent, getIsOpenDialogContent} from "../../selectors/admin_selectors";


const addHouse = (data, includesCount, docId) => {
    const files = data.imagesURL;

    const dataCopy = {
        title: data.title,
        usableArea: toNumber(data.usableArea),
        totalArea: toNumber(data.totalArea),
        dimensions: [toNumber(data.dimensions1), toNumber(data.dimensions2)],
        floors: data.floors,
        minPrice: toNumber(data.minPrice),
        maxPrice: toNumber(data.maxPrice),
        bedRooms: toNumber(data.bedRooms),
        bathRooms: toNumber(data.bathRooms),
        description: data.description,
    }

    const includes = [];

    for (let i=1; i <= includesCount; i++) {
        const includeName = `includes${i}`;
        const include = data[includeName];
        includes.push(include)
    }
    dataCopy.includes = includes;

    commonAPI.addUpdateDoc(firestoreCollections.houses, files, dataCopy, docId)
}

const addNewsItem = (data, docId) => {
    const files = data.imagesURL;
    delete data.imagesURL;

    commonAPI.addUpdateDoc(firestoreCollections.news, files, data, docId)
}

export const AdminContext = React.createContext({})

const AdminContainer = (props) => {
    return <AdminContext.Provider value={{addHouse, addNewsItem}}>
        <Admin {...props}/>
    </AdminContext.Provider>
};

const mapStateToProps = (state) => ({
    user: getUser(state),
    isOpenDialogContent: getIsOpenDialogContent(state),
    DialogContent: getDialogContent(state),
    defaultValues: getDefaultValues(state),
})

export default connect(mapStateToProps, {logout, openCloseAdminDialogContent})(AdminContainer);