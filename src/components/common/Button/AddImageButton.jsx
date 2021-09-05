import React from 'react';
import {IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


const AddImageButton = ({addItem}) => {
    return (
        <IconButton style={{position: 'relative', cursor: 'pointer'}}>
            <input onChange={addItem} multiple={false}
                   style={{position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer'}}
                   type={"file"}/>
            <AddIcon style={{fontSize: '60px'}}/>
        </IconButton>
    )
}

export default AddImageButton;