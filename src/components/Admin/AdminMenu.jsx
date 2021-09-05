import React from 'react';
import {Drawer, List, ListItemIcon, ListItemText, ListItem} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import HouseIcon from '@material-ui/icons/House';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PhotoIcon from '@material-ui/icons/Photo';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

import Registration from "../Registration/Registration";
import AddNews from "./DialogsContent/AddNews";
import AddHouse from "./DialogsContent/AddHouse";
import Banners from "./DialogsContent/Banners";
import Albums from "./DialogsContent/Albums";


const Actions = ({children, setOpen}) => {
    return (
        <div
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
        >
            <List>
                {children.map(({text, action, icon}) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} onClick={action}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

const AdminMenu = ({open, setOpen, openCloseAdminDialogContent, logout}) => {
    return (
        <div>
            <>
                <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
                    <Actions setOpen={setOpen}>
                        {[
                            {
                                text: 'Добавить дом',
                                icon: <HouseIcon />,
                                action: () => openCloseAdminDialogContent(true, AddHouse),
                            },
                            {
                                text: 'Добавить новость',
                                icon: <CreateIcon />,
                                action: () => openCloseAdminDialogContent(true, AddNews),
                            },
                            {
                                text: 'Баннеры',
                                icon: <PhotoIcon />,
                                action: () => openCloseAdminDialogContent(true, Banners),
                            },
                            {
                                text: 'Альбомы',
                                icon: <PhotoAlbumIcon />,
                                action: () => openCloseAdminDialogContent(true, Albums),
                            },
                            {
                                text: 'Добавить администратора',
                                icon: <PersonAddIcon />,
                                action:  () => openCloseAdminDialogContent(true, Registration),
                            },
                            {
                                text: 'Выйти',
                                icon: <ExitToAppIcon />,
                                action: logout
                            },
                        ]}
                    </Actions>
                </Drawer>
            </>
        </div>
    );
};

export default AdminMenu;