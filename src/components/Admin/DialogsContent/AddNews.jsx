import React, {useContext} from 'react';
import {useForm, useWatch} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import MyInput from "../../common/Form/MyInput";
import TextArea from "../../common/Form/TextArea";
import AdminContext from "../AdminContext";
import ContentForm, {ContentSlide} from "../../common/Form/ContentForm";
import FileInput from "../../common/Form/FileInput";


const schema = yup.object().shape({
    title: yup.string().required(),
    text: yup.string().required(),
});

const AddNews = ({defaultValues, openCloseAdminDialogContent}) => {
    const {addNewsItem} = useContext(AdminContext);

    const {register, control, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            imagesURL: defaultValues?.imagesURL,
            title: defaultValues?.title,
            text: defaultValues?.text,
        },
    });
    const text = useWatch({name: 'text', control});

    const onAddNewsItem = (data) => {
        addNewsItem(data, defaultValues?.id);
        openCloseAdminDialogContent(false, null);
    }

    return (
        <ContentForm handleSubmit={handleSubmit} onSubmit={onAddNewsItem} buttonTitle={'Добавить новость'} errors={errors}>
            <ContentSlide>
                <FileInput h={'250px'} control={control} name={'imagesURL'}/>
            </ContentSlide>
            <ContentSlide>
                <MyInput placeholder={'Заголовок'} {...register('title')}/>
                <TextArea placeholder={'Текст новости'} maxLength={5000} value={text} {...register('text')}/>
            </ContentSlide>
        </ContentForm>
    );
};

export default AddNews;