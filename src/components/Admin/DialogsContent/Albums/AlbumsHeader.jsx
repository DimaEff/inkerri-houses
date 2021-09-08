import React, {useEffect, useState} from 'react';
import * as yup from "yup";
import {useForm, useWatch} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, IconButton} from "@material-ui/core";

import Select from "../../../common/Form/Select";
import MyInput from "../../../common/Form/MyInput";
import AddIcon from "@material-ui/icons/Add";


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

export default AlbumsHeader;
