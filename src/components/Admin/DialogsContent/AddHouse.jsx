import React, {useState} from 'react';
import AdminCarousel from "./AdminCarousel";
import FileInput from "../../common/Form/FileInput";
import MyInput from "../../common/Form/MyInput";
import TextArea from "../../common/Form/TextArea";
import {Button, makeStyles} from "@material-ui/core";
import MyPaper from "../../common/AppContainer/MyPaper";
import {useForm, useWatch} from "react-hook-form";
import Select from "../../common/Form/Select";


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

const AddHouse = () => {
    const styles = useStyles();

    const {register, unregister, control, handleSubmit} = useForm();
    const description = useWatch({name: 'description', control});

    const [includesCount, setIncludesCount] = useState(1);
    let includes = [];
    for (let i=1; i <= includesCount; i++) {
        includes.push(<MyInput
            key={i}
            placeholder={`В стоимость включено(${i})`}
            {...register(`includes${i}`)}
        />)
    }

    const submit = (data) => {
        console.log(data)
    }

    const deleteIncludeField = () => {
        unregister(`includes${includesCount}`)
        setIncludesCount(c => c - 1)
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
                            <Select {...register('floors')}>
                                <option disabled>Количество этажей</option>
                                <option selected value={'1'}>1</option>
                                <option value={'1.5'}>1.5</option>
                                <option value={'2'}>2</option>
                            </Select>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div style={{width: '80%'}}>
                            {includes}
                            <div>
                                <Button onClick={() => setIncludesCount(c => c + 1)}>+</Button>
                                <Button onClick={deleteIncludeField}>-</Button>
                            </div>
                        </div>
                    </div>
                    <div style={{height: '100%'}}>
                        <div className={styles.slide}>
                            <Button type={'submit'} variant={'text'}>
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