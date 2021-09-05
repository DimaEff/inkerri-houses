import React, {useContext, useEffect, useState} from 'react';
import {Button, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {useForm, useWatch} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import Select from "../../common/Form/Select";
import {getRandomString} from "../../../utils/helpers";
import MyInput from "../../common/Form/MyInput";
import ContentForm, {ContentSlide} from "../../common/Form/ContentForm";
import AddImageButton from "../../common/Button/AddImageButton";
import AdminSliderImage from "../../common/AppContainer/AdminSliderImage";
import AdminContext from "../AdminContext";


const testAlbums = [
    {
        id: 'fsgdvx',
        name: 'Альбом 1',
        imagesURL: ['https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', 'https://smapse.ru/storage/2018/12/east-campus-aerial.jpg']
    },
    {
        id: 'asaggwg',
        name: 'Альбом 2',
        imagesURL: ['https://www.timeoutdubai.com/public/styles/full_img/public/images/2020/07/13/IMG-Dubai-UAE.jpg?itok=j4dmDDZa', 'https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg']
    },
    {
        id: 'sddbe',
        name: 'Альбом 3',
        imagesURL: []
    },
];

const schema = yup.object().shape({
    name: yup.string()
        .required().min(3, 'Минимум 3 символа').max(30, 'Минимум 3 символа'),
});

const AlbumsHeader = ({albums, setAlbums, setCurrentAlbum}) => {
    const [open, setOpen] = useState(false);

    const {register, setValue, control, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            currentAlbum: albums[0].id,
        }
    })

    const currentAlbum = useWatch({name: 'currentAlbum', control});
    useEffect(() => {
        setCurrentAlbum(currentAlbum)
    }, [currentAlbum, setCurrentAlbum])

    const resetName = () => {
        setValue('name', '');
        setOpen(false);
    }

    const handleAddAlbum = (data) => {
        const res = testAlbums.push({id: getRandomString(), name: data.name, imagesURL: []});
        setAlbums(testAlbums);
        resetName();
    }
    
    return (
        <form onSubmit={handleSubmit(handleAddAlbum)}>
            <Select {...register('currentAlbum')}>
                {albums.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
            </Select>
            <div style={{textAlign: 'center', marginTop: '20px', height: '40px'}}>
                {open ?
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '300px'}}>
                        <MyInput placeholder={'Название альбома'} errorText={errors.name} {...register('name')}/>
                        <IconButton type={'submit'}>
                            <AddIcon />
                        </IconButton>
                    </div>:
                    <Button type={'button'} variant={'outlined'} onClick={() => setOpen(true)}>
                        Добавить альбом
                    </Button>
                }
            </div>
        </form>
    )
}

const Albums = () => {
    const {addPhotosToAlbum, deletePhotosFromAlbum} = useContext(AdminContext);

    // Надо подключить компонент к стору(но сначала сделать редьюсер) и передать альбомы.
    // Потом добавить использование функций add..., delete...
    const [albums, setAlbums] = useState(testAlbums);
    const [currentAlbum, setCurrentAlbum] = useState(null);
    
    return (
        <ContentForm withoutForm={<AddImageButton addItem={() => console.log('add img')}/>} 
                     header={<AlbumsHeader albums={albums} setAlbums={setAlbums} setCurrentAlbum={setCurrentAlbum}/>}
        >
            {albums.find(({id}) => id === currentAlbum)?.imagesURL.map((imageURL) => <ContentSlide key={imageURL}>
                <AdminSliderImage id={imageURL}
                                  imageURL={imageURL}
                                  deleteFunction={() => console.log('delete img')}
                />
            </ContentSlide>)}
        </ContentForm>
    );
};

export default Albums;