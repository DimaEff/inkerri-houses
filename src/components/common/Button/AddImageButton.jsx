import React from 'react';
import {IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


const AddImageButton = ({addItem, multiple}) => {
    const handleAdd = (e) => {
        addItem(e.target.files);
    }

    return (
        <IconButton style={{position: 'relative', cursor: 'pointer'}}>
            <input onChange={handleAdd} multiple={multiple}
                   style={{position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer'}}
                   type={"file"}/>
            <AddIcon style={{fontSize: '60px'}}/>
        </IconButton>
    )
}

export default AddImageButton;