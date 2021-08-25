import React, {useContext, useEffect, useState} from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import {useForm, useWatch} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import FileInput from "../../common/Form/FileInput";
import MyInput from "../../common/Form/MyInput";
import TextArea from "../../common/Form/TextArea";
import Select from "../../common/Form/Select";
import AdminContext from "../AdminContext";
import ContentForm, {ContentSlide} from "../../common/Form/ContentForm";


const numberField = yup.number().required().positive();

const schema = yup.object().shape({
    title: yup.string()
        .required(),
    description: yup.string()
        .required(),
    totalArea: numberField,
    usableArea: numberField,
    dimensions1: numberField,
    dimensions2: numberField,
    minPrice: numberField,
    maxPrice: numberField,
    bathRooms:numberField,
    bedRooms: numberField,
});

const useStyles = makeStyles(theme => ({
    doubleInput: {
        display: 'flex',
        justifyContent: 'space-between',

        '& div': {
            width: '47%',
        }
    }
}))

const refactorDefValue = (defaultValues) => {
    let values = defaultValues && {
        imagesURL: defaultValues.imagesURL,
        title: defaultValues.title,
        usableArea: defaultValues.usableArea,
        totalArea: defaultValues.totalArea,
        dimensions1: defaultValues.dimensions[0],
        dimensions2: defaultValues.dimensions[1],
        floors: defaultValues.floors,
        minPrice: defaultValues.minPrice,
        maxPrice: defaultValues.maxPrice,
        bedRooms: defaultValues.bedRooms,
        bathRooms: defaultValues.bathRooms,
        description: defaultValues.description,
    };

    defaultValues?.includes.forEach((include, index) => values[`includes${index + 1}`] = include)

    return values;
}

const AddHouse = ({defaultValues, openCloseAdminDialogContent}) => {
    const {addHouse} = useContext(AdminContext);

    const styles = useStyles();
    const defaultFormValues = refactorDefValue(defaultValues);

    const {register, unregister, control, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: defaultFormValues,
    });
    const description = useWatch({name: 'description', control});

    const [includesCount, setIncludesCount] = useState(defaultValues?.includes ? defaultValues.includes.length: 1);
    const [includes, setIncludes] = useState([]);

    useEffect(() => {
        const test = () => {
            let result = [];

            for (let i=1; i <= includesCount; i++) {
                result.push(<MyInput
                    key={i}
                    placeholder={`В стоимость включено(${i})`}
                    {...register(`includes${i}`)}
                />)
            }

            return result;
        }
        setIncludes(test())
    }, [includesCount])

    const onAddHouse = (data) => {
        addHouse(data, includesCount, defaultValues?.id);
        openCloseAdminDialogContent(false, null);
    }

    const deleteIncludeField = () => {
        unregister(`includes${includesCount}`)
        setIncludesCount(c => c - 1)
    }

    return (
        <ContentForm handleSubmit={handleSubmit} onSubmit={onAddHouse} buttonTitle={'Добавить дом'} errors={errors}>
            <ContentSlide>
                <FileInput h={'250px'} control={control} name={'imagesURL'}/>
            </ContentSlide>
            <ContentSlide>
                <MyInput placeholder={'Название дома'} {...register('title')}/>
                <TextArea placeholder={'Описание'} maxLength={5000} value={description} {...register('description')}/>
            </ContentSlide>
            <ContentSlide>
                <MyInput placeholder={'Общая площадь'} {...register('totalArea')}/>
                <MyInput placeholder={'Полезная площадь'} {...register('usableArea')}/>
                <div className={styles.doubleInput}>
                    <MyInput placeholder={'Габариты(длина)'} {...register('dimensions1')}/>
                    <MyInput placeholder={'Габариты(ширина)'} {...register('dimensions2')}/>
                </div>
                <div className={styles.doubleInput}>
                    <MyInput placeholder={'Минимальная цена'} {...register('minPrice')}/>
                    <MyInput placeholder={'Максимальная цена'} {...register('maxPrice')}/>
                </div>
            </ContentSlide>
            <ContentSlide>
                <MyInput placeholder={'Количество с/узлов'} {...register('bathRooms')}/>
                <MyInput placeholder={'Количество спален'} {...register('bedRooms')}/>
                <Select defaultValue={'1'} {...register('floors')}>
                    <option disabled>Количество этажей</option>
                    <option value={'1'}>1</option>
                    <option value={'1.5'}>1.5</option>
                    <option value={'2'}>2</option>
                </Select>
            </ContentSlide>
            <ContentSlide>
                <div style={{height: '100%', maxHeight: '250px', overflowY: 'auto'}}>
                    <Typography variant={'subtitle1'}>Предложения должны быть вида: "Заголовок@ ...тело..."</Typography>
                    <Typography variant={'subtitle1'}>Все, что до "@" буде иметь утолщенный шрифт; все, что после - обычный.</Typography>
                    {includes}
                    <div>
                        <Button onClick={() => setIncludesCount(c => c + 1)}>+</Button>
                        <Button onClick={deleteIncludeField}>-</Button>
                    </div>
                </div>
            </ContentSlide>
        </ContentForm>
    );
};

export default AddHouse;