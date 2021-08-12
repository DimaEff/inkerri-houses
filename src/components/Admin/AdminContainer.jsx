import React, {useState} from 'react';
import {connect} from "react-redux";

import {getUser} from "../../selectors/user_selectors";
import {logout} from "../../store/userReducer";
import AdminButton from "./AdminButton";
import {Dialog, makeStyles} from "@material-ui/core";
import LoginForm from "../LoginForm/LoginForm";
import AdminMenu from "./AdminMenu";


const useStyles = makeStyles((theme) => ({
    adminLoginButton: {
        zIndex: '3',
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '30px',
        height: '30px',
    },
}))

const AdminContainer = ({user, logout}) => {
    const styles = useStyles();

    const [openMenu, setOpenMenu] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const [openContentDialog, setOpenContentDialog] = useState(false);
    const [contentDialog, setContentDialog] = useState(null);

    const openContentDialogCreator = (content) => () => {
        setContentDialog(content);
        setOpenContentDialog(true);
    }

    return (
        <div>
            {!!user || <div>
                <span className={styles.adminLoginButton} onClick={() => setOpenDialog(true)}/>
                <Dialog onClose={() => setOpenDialog(false)} aria-labelledby={'login-dialog'} open={openDialog}>
                    <LoginForm action={() => setOpenDialog(false)}/>
                </Dialog>
            </div>}
            {user && <AdminButton onClick={() => setOpenMenu(true)}/>}
            <AdminMenu open={openMenu}
                       setOpen={setOpenMenu}
                       openContentDialogCreator={openContentDialogCreator}
                       logout={logout}/>
            <Dialog onClose={() => setOpenContentDialog(false)} aria-labelledby={'content-dialog'} open={openContentDialog}>
                {contentDialog}
            </Dialog>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: getUser(state),
})

export default connect(mapStateToProps, {logout})(AdminContainer);