import React from "react";

import {
    getHomeRoute,
    getPhotosRoute,
    getScandinavianRoute,
    getDesigningRoute,
    getConsultingRoute, getNewsItemRoute, ItemRoute, getNewsRoute, Route,
} from "./consts";
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
        path: getHomeRoute(),
        Component: Home,
        exact: true,
        menuNum: 1,
    },
    {
        name: 'Новости',
        path: getNewsItemRoute(),
        Component: NewsContainer,
        lazyLoading: true,
        menuPath: getNewsRoute(),
        menuNum: 1,
    },
    {
        name: 'Готовые проекты',
        path: ItemRoute(),
        Component: HousesContainer,
        menuPath: Route(),
        menuNum: 1,
    },
    {
        name: 'Фотогалерея',
        path: getPhotosRoute(),
        Component: PhotosContainer,
        lazyLoading: true,
        menuNum: 1,
    },
    {
        name: 'Скандинавские дома',
        path: getScandinavianRoute(),
        Component: ScandinavianContainer,
        lazyLoading: true,
        menuNum: 2,
    },
    {
        name: 'Проектирование',
        path: getDesigningRoute(),
        Component: Designing,
        lazyLoading: true,
        menuNum: 2,
    },
    {
        name: 'Консультации',
        path: getConsultingRoute(),
        Component: Consulting,
        lazyLoading: true,
        menuNum: 2,
    },
];

export default appRoutes;