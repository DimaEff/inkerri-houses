import React, {useContext, useEffect, useState} from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import {useForm, useWatch} from "react-hook-form";

import AdminCarousel from "./AdminCarousel";
import FileInput from "../../common/Form/FileInput";
import MyInput from "../../common/Form/MyInput";
import TextArea from "../../common/Form/TextArea";
import MyPaper from "../../common/AppContainer/MyPaper";
import Select from "../../common/Form/Select";
import AdminContext from "../AdminContext";


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
    },
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

    const {register, unregister, control, handleSubmit} = useForm({
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
        addHouse(data, includesCount, defaultValues.id);
        openCloseAdminDialogContent(false, null);
    }

    const deleteIncludeField = () => {
        unregister(`includes${includesCount}`)
        setIncludesCount(c => c - 1)
    }

    return (
        <MyPaper style={{width: '600px'}}>
            <form style={{width: '90%'}} onSubmit={handleSubmit(onAddHouse)}>
                <AdminCarousel>
                    <div className={styles.slide}>
                        <div>
                            <FileInput control={control} name={'imagesURL'}/>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div style={{width: '80%'}}>
                            <MyInput placeholder={'Название дома'} {...register('title')}/>
                            <TextArea placeholder={'Описание'} maxLength={5000} myValue={description} {...register('description')}/>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div style={{width: '80%'}}>
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
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div style={{width: '80%'}}>
                            <MyInput placeholder={'Количество с/узлов'} {...register('bathRooms')}/>
                            <MyInput placeholder={'Количество спален'} {...register('bedRooms')}/>
                            <Select defaultValue={'1'} {...register('floors')}>
                                <option disabled>Количество этажей</option>
                                <option value={'1'}>1</option>
                                <option value={'1.5'}>1.5</option>
                                <option value={'2'}>2</option>
                            </Select>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div style={{width: '80%', height: '100%', maxHeight: '250px', overflowY: 'auto'}}>
                            <Typography variant={'subtitle1'}>Предложения должны быть вида: "Заголовок@ ...тело..."</Typography>
                            <Typography variant={'subtitle1'}>Все, что до "@" буде иметь утолщенный шрифт; все, что после - обычный.</Typography>
                            {includes}
                            <div>
                                <Button onClick={() => setIncludesCount(c => c + 1)}>+</Button>
                                <Button onClick={deleteIncludeField}>-</Button>
                            </div>
                        </div>
                    </div>
                    <div style={{height: '100%'}}>
                        <div className={styles.slide}>
                            <Button type={'submit'} variant={'outlined'}>
                                Добавить дом
                            </Button>
                        </div>
                    </div>
                </AdminCarousel>
            </form>
        </MyPaper>
    );
};

export default AddHouse;