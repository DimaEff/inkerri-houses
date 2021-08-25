import React, {useContext} from 'react';
import MyPaper from "../AppContainer/MyPaper";
import AdminCarousel from "../../Admin/DialogsContent/AdminCarousel";
import {Button, makeStyles, Typography} from "@material-ui/core";
import {AlertContext} from "../../../App";


const useStyles = makeStyles(theme => ({
    root: {
        width: '600px',

        '&>from': {
            width: '90%',
        },
    },
    slide: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',

        '& button': {
            fontSize: '25px',
            marginBottom: '15px',
        },

        '&>div': {
            width: '80%',
        },
    },
    doubleInput: {
        display: 'flex',
        justifyContent: 'space-between',

        '& div': {
            width: '47%',
        },
    },
}))

export const ContentSlide = ({children}) => {
    const styles = useStyles();

    return <div className={styles.slide}>
        <div>
            {children}
        </div>
    </div>
}

const ContentForm = ({children, withoutForm, handleSubmit, onSubmit, buttonTitle, errors}) => {
    const styles = useStyles();
    const TryToSubmitWithAlerts = useContext(AlertContext);

    const withoutErrors = errors === undefined || Object.keys(errors).length === 0;

    return (
        <MyPaper style={{width: '600px'}}>
            <form style={{width: '90%'}}
                  onSubmit={withoutForm ? () => '': handleSubmit(TryToSubmitWithAlerts(onSubmit))}>
                <AdminCarousel>
                    {children}

                    <div style={{height: '100%'}}>
                        <div className={styles.slide}>
                            {withoutForm ||
                            <Button type={'submit'} disabled={!withoutErrors} variant={'outlined'}>
                                {buttonTitle || 'Добавить'}
                            </Button>}
                            {!withoutErrors &&
                            <Typography variant={'h6'} color={'error'}>Проверьте введенные данные</Typography>}
                        </div>
                    </div>
                </AdminCarousel>
            </form>
        </MyPaper>
    );
};

export default ContentForm;