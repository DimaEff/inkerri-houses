import React from 'react';
import {IconButton, Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


const AddButton = ({addBannerItem}) => {
    return (
        <div>
            <Typography align={'center'}>
                Соотношение сторон изображения(ширина/высота) должно быть максимум 2.18
                (а вообще, желательно, чтобы было близко к этому соотношению).
                Так же, желательно, чтобы ширина была 1920px. Идеально - 1920х880.
            </Typography>
            <IconButton style={{position: 'relative', cursor: 'pointer'}}>
                <input onChange={addBannerItem} multiple={false}
                       style={{position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer'}}
                       type={"file"}/>
                <AddIcon style={{fontSize: '60px'}}/>
            </IconButton>
        </div>
    )
}

export default AddButton;