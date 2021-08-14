import React, {useState} from 'react';

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

const Admin = ({isOpenDialogContent, DialogContent, defaultValues, openCloseAdminDialogContent, user, logout}) => {
    const styles = useStyles();

    const [openMenu, setOpenMenu] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

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
                       openCloseAdminDialogContent={openCloseAdminDialogContent}
                       logout={logout}
            />
            <Dialog onClose={() => openCloseAdminDialogContent(false, null)}
                    aria-labelledby={'content-dialog'}
                    open={isOpenDialogContent}
            >
                {
                    (isOpenDialogContent && DialogContent) &&
                    <DialogContent
                        defaultValues={defaultValues}
                        openCloseAdminDialogContent={openCloseAdminDialogContent}
                    />
                }
            </Dialog>
        </div>
    );
};


export default Admin;