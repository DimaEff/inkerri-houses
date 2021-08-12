import React from 'react';

import {Drawer, List, ListItemIcon, ListItemText, ListItem} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Registration from "../Registration/Registration";
import AddNews from "./DialogsContent/AddNews";
import AddHouse from "./DialogsContent/AddHouse";


const Actions = ({children, setOpen}) => {
    return (
        <div
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
        >
            <List>
                {children.map(({text, action}) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} onClick={action}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

const AdminMenu = ({open, setOpen, openContentDialogCreator, logout}) => {
    return (
        <div>
            <>
                <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
                    <Actions setOpen={setOpen}>
                        {[
                            {text: 'Добавить дом', action: openContentDialogCreator(<AddHouse />)},
                            {text: 'Добавить новость', action: openContentDialogCreator(<AddNews />)},
                            {text: 'Добавить фото', action: openContentDialogCreator('Добавить фото')},
                            {text: 'Добавить администратора', action:  openContentDialogCreator(<Registration />)},
                            {text: 'Выйти', action: logout},
                        ]}
                    </Actions>
                </Drawer>
            </>
        </div>
    );
};

export default AdminMenu;