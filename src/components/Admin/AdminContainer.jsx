import React from 'react';
import {connect} from "react-redux";

import {logout} from "../../store/userReducer";
import {getUser} from "../../selectors/user_selectors";
import Admin from "./Admin";
import {openCloseAdminDialogContent} from "../../store/adminReducer";
import {getDefaultValues, getDialogContent, getIsOpenDialogContent} from "../../selectors/admin_selectors";
import AdminContext, * as adminFunctions from "./AdminContext";


const AdminContainer = (props) => {
    return <AdminContext.Provider value={adminFunctions}>
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