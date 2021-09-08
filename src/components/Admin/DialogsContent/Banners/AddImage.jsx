import React from 'react';
import {Typography} from "@material-ui/core";

import AddImageButton from "../../../common/Button/AddImageButton";


const AddImage = ({addBannerItem}) => {
    return (
        <div>
            <Typography align={'center'}>
                Соотношение сторон изображения(ширина/высота) должно быть максимум 2.18
                (а вообще, желательно, чтобы было близко к этому соотношению).
                Так же, желательно, чтобы ширина была 1920px. Идеально - 1920х880.
            </Typography>
            <AddImageButton addItem={addBannerItem}/>
        </div>
    )
}

export default AddImage;
