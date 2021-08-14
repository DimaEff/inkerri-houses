import React, {useContext} from 'react';
import MyPaper from "../../common/AppContainer/MyPaper";
import FileInput from "../../common/Form/FileInput";
import {useForm, useWatch} from "react-hook-form";

import AdminCarousel from "./AdminCarousel";
import {Button, makeStyles} from "@material-ui/core";
import MyInput from "../../common/Form/MyInput";
import TextArea from "../../common/Form/TextArea";
import {AdminContext} from "../AdminContainer";


const useStyles = makeStyles(theme => ({
    slide: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',

        '& button': {
            fontSize: '25px',
        }
    }
}))

const AddNews = ({defaultValues, openCloseAdminDialogContent}) => {
    const {addNewsItem} = useContext(AdminContext);

    const styles = useStyles();

    const {register, control, handleSubmit} = useForm({
        defaultValues: {
            imagesURL: defaultValues.imagesURL,
            title: defaultValues.title,
            text: defaultValues.text,
        },
    });
    const text = useWatch({name: 'text', control});

    const onAddNewsItem = (data) => {
        addNewsItem(data, defaultValues.id);
        openCloseAdminDialogContent(false, null);
    }

    return (
        <MyPaper style={{width: '600px'}}>
            <form style={{width: '90%'}} onSubmit={handleSubmit(onAddNewsItem)}>
                <AdminCarousel>
                    <div className={styles.slide}>
                        <div>
                            <FileInput control={control} name={'imagesURL'}/>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div style={{width: '80%'}}>
                            <MyInput placeholder={'Заголовок'} {...register('title')}/>
                            <TextArea placeholder={'Текст новости'} maxLength={5000} myValue={text} {...register('text')}/>
                        </div>
                    </div>
                    <div style={{height: '100%'}}>
                        <div className={styles.slide}>
                            <Button type={'submit'} variant={'outlined'}>
                                Добавить новость
                            </Button>
                        </div>
                    </div>
                </AdminCarousel>
            </form>
        </MyPaper>
    );
};

export default AddNews;