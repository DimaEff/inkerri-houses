import React from 'react';
import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";


const FailedAlert = ({open, handleClose, alertText}) => {
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={handleClose}
                autoHideDuration={3000}
                key={'top_right'}
            >
                <MuiAlert elevation={6} variant="filled" severity="error">
                    {alertText || 'Что-то пошло не так'}
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default FailedAlert;