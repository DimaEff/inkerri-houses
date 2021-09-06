import React, {useContext, useEffect, useState} from 'react';
import {Button, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {useForm, useWatch} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {connect} from "react-redux";

import Select from "../../common/Form/Select";
import MyInput from "../../common/Form/MyInput";
import ContentForm, {ContentSlide} from "../../common/Form/ContentForm";
import AddImageButton from "../../common/Button/AddImageButton";
import AdminSliderImage from "../../common/AppContainer/AdminSliderImage";
import {getAlbums} from "../../../selectors/albums_selectors";
import AdminContext from "../AdminContext";
import {commonAPI} from "../../../firebase/api";
import {firestoreCollections} from "../../../utils/consts";


const schema = yup.object().shape({
    name: yup.string()
        .required().min(3, 'Минимум 3 символа').max(30, 'Минимум 3 символа'),
});

const AlbumsHeader = ({albums, addAlbum, deleteAlbum, setCurrentAlbum}) => {
    const [open, setOpen] = useState(false);

    const {register, setValue, control, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            currentAlbum: albums[0]?.id,
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
        addAlbum(data.name);
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
                            <AddIcon/>
                        </IconButton>
                    </div> :
                    <div>
                        <Button type={'button'} variant={'outlined'} onClick={() => setOpen(true)}>
                            Добавить альбом
                        </Button>
                        <Button type={'button'} variant={'outlined'} onDoubleClick={deleteAlbum}>
                            Удалить текущий альбом
                        </Button>
                    </div>
                }
            </div>
        </form>
    )
}

const Albums = ({albums}) => {
    const {addNewAlbum, addPhotosToAlbum, deletePhotosFromAlbum} = useContext(AdminContext);

    const [currentAlbum, setCurrentAlbum] = useState(null);

    const currentAlbumData = albums.find(album => album.id === currentAlbum);

    const handleAddImages = (e) => {
        addPhotosToAlbum(currentAlbum, e, currentAlbumData);
    }

    const handleDeleteImage = (imageURL) => {
        deletePhotosFromAlbum(currentAlbum, imageURL, currentAlbumData);
    }

    const handleDeleteAlbum = () => {
        commonAPI.deleteDoc(firestoreCollections.albums, currentAlbum, currentAlbumData.imagesURL);
    }

    return (
        <ContentForm withoutForm={<AddImageButton multiple addItem={handleAddImages}/>}
                     header={<AlbumsHeader albums={albums} deleteAlbum={handleDeleteAlbum} addAlbum={addNewAlbum}
                                           setCurrentAlbum={setCurrentAlbum}/>}
        >
            {albums.find(({id}) => id === currentAlbum)?.imagesURL?.map((imageURL) => <ContentSlide key={imageURL}>
                <AdminSliderImage id={imageURL}
                                  imageURL={imageURL}
                                  deleteFunction={() => handleDeleteImage(imageURL)}
                />
            </ContentSlide>)}
        </ContentForm>
    );
};

const mapStateToProps = (state) => ({
    albums: getAlbums(state),
})

export default connect(mapStateToProps, {})(Albums);