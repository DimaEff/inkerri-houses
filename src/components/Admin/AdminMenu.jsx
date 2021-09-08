import React from 'react';
import {Drawer} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import HouseIcon from '@material-ui/icons/House';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PhotoIcon from '@material-ui/icons/Photo';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

import Registration from "../Registration/Registration";
import AddNews from "./DialogsContent/AddNews";
import AddHouse from "./DialogsContent/AddHouse";
import Banners from "./DialogsContent/Banners/Banners";
import Albums from "./DialogsContent/Albums/Albums";
import AdminMenuAction from "./AdminMenuAction";


const AdminMenu = ({open, setOpen, openCloseAdminDialogContent, logout}) => {
    return (
        <div>
            <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
                <AdminMenuAction setOpen={setOpen}>
                    {[
                        {
                            text: 'Добавить дом',
                            icon: <HouseIcon/>,
                            action: () => openCloseAdminDialogContent(true, AddHouse),
                        },
                        {
                            text: 'Добавить новость',
                            icon: <CreateIcon/>,
                            action: () => openCloseAdminDialogContent(true, AddNews),
                        },
                        {
                            text: 'Баннеры',
                            icon: <PhotoIcon/>,
                            action: () => openCloseAdminDialogContent(true, Banners),
                        },
                        {
                            text: 'Альбомы',
                            icon: <PhotoAlbumIcon/>,
                            action: () => openCloseAdminDialogContent(true, Albums),
                        },
                        {
                            text: 'Добавить администратора',
                            icon: <PersonAddIcon/>,
                            action: () => openCloseAdminDialogContent(true, Registration),
                        },
                        {
                            text: 'Выйти',
                            icon: <ExitToAppIcon/>,
                            action: logout
                        },
                    ]}
                </AdminMenuAction>
            </Drawer>
        </div>
    );
};

export default AdminMenu;