import React from "react";

import * as routes from "./consts";
import Home from "../Pages/Home/Home";
import HousesContainer from '../Pages/Houses/HousesContainer';

const ScandinavianContainer = React.lazy(() => import("../Pages/Scandinavian/ScandinavianContainer"));
const Designing = React.lazy(() => import("../Pages/Designing/Designing"));
const Consulting = React.lazy(() => import("../Pages/Consulting/Consulting"));
const NewsContainer = React.lazy(() => import("../Pages/News/NewsContainer"));
const PhotosContainer = React.lazy(() => import("../Pages/Photos/PhotosContainer"));


const appRoutes = [
    {
        name: 'Главная',
        path: routes.getHomeRoute(),
        Component: Home,
        exact: true,
        menuNum: 1,
    },
    {
        name: 'Новости',
        path: routes.getNewsItemRoute(),
        Component: NewsContainer,
        lazyLoading: true,
        menuPath: routes.getNewsRoute(),
        menuNum: 1,
    },
    {
        name: 'Готовые проекты',
        path: routes.HouseItemRoute(),
        Component: HousesContainer,
        menuPath: routes.HouseRoute(),
        menuNum: 1,
    },
    {
        name: 'Фотогалерея',
        path: routes.getPhotosAlbumRoute(),
        Component: PhotosContainer,
        lazyLoading: true,
        menuPath: routes.getPhotosRoute(),
        menuNum: 1,
        withoutElement: true,
    },
    {
        name: 'Скандинавские дома',
        path: routes.getScandinavianRoute(),
        Component: ScandinavianContainer,
        lazyLoading: true,
        menuNum: 2,
    },
    {
        name: 'Проектирование',
        path: routes.getDesigningRoute(),
        Component: Designing,
        lazyLoading: true,
        menuNum: 2,
    },
    {
        name: 'Консультации',
        path: routes.getConsultingRoute(),
        Component: Consulting,
        lazyLoading: true,
        menuNum: 2,
    },
];

export default appRoutes;