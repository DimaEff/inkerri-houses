import React from 'react';
import {useController} from "react-hook-form";
import {useDropzone} from "react-dropzone";
import {List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Typography} from "@material-ui/core";
import {CloudUpload, InsertDriveFile} from "@material-ui/icons";


const useStyles = makeStyles(theme => ({
    root: ({h, w}) => ({
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        height: h,
        width: w,
        padding: '10px',
        margin: '20px',
        borderRadius: '30px',
        backgroundColor: 'rgba(100, 100, 100, .4)',
        color: '#333',
        cursor: 'pointer',
        overflowY: 'auto',
    }),
    icon: {
        marginTop: '16px',
        fontSize: '42px',
        color: '#888',
    }
}))

const FileInput = ({control, name, h, w}) => {
    const styles = useStyles({h, w});

    const {field: {onChange, onBlur, value}} = useController({
        name,
        control,
        rules: {required: true},
        defaultValue: [],
    })

    const {getRootProps, getInputProps} = useDropzone({onDrop: onChange})

    return (
        <div>
            <Paper className={styles.root} variant={'outlined'} {...getRootProps()}>
                <input {...getInputProps()} name={name} onBlur={onBlur}/>
                {value.length > 0 ?
                    <div>
                        <List>
                            {value.map((file, index) => <ListItem key={file.name || index}>
                                <ListItemIcon>
                                    <InsertDriveFile />
                                </ListItemIcon>
                                <ListItemText primary={file.name} secondary={file.size}/>
                            </ListItem>)}
                        </List>
                    </div>:
                    <div>
                        <CloudUpload className={styles.icon}/>
                        <Typography variant={'subtitle2'}>Переместите файлы или клините по полю для их выбора.</Typography>
                    </div>
                }
            </Paper>

        </div>
    );
};

export default FileInput;