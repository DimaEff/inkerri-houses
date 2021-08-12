import React from 'react';
import MyPaper from "../../common/AppContainer/MyPaper";
import FileInput from "../../common/Form/FileInput";
import {useForm, useWatch} from "react-hook-form";

import AdminCarousel from "./AdminCarousel";
import {Button, makeStyles} from "@material-ui/core";
import MyInput from "../../common/Form/MyInput";
import TextArea from "../../common/Form/TextArea";


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

const AddNews = () => {
    const styles = useStyles();

    const {register, control, handleSubmit} = useForm();
    const text = useWatch({name: 'text', control});

    const submit = (data) => {
        console.log(data)
    }

    return (
        <MyPaper style={{width: '600px'}}>
            <form style={{width: '90%'}} onSubmit={handleSubmit(submit)}>
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
                            <Button variant={'text'}>
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