import React from 'react';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';


const SuccessAlert = ({open, handleClose, alertText}) => {
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={handleClose}
                autoHideDuration={3000}
                key={'top_right'}
            >
                <MuiAlert elevation={6} variant="filled" severity="success">
                    {alertText || 'Действие успешно выполнено!'}
                </MuiAlert>
            </Snackbar>
        </div>
    );
}

export default SuccessAlert;