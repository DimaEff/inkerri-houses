import React from "react";

import {
    getHomeRoute,
    getPhotosRoute,
    getScandinavianRoute,
    getDesigningRoute,
    getConsultingRoute, getNewsItemRoute, getHousesItemRoute, getNewsRoute, getHousesRoute,
} from "./consts";
import Home from "../Pages/Home/Home";
import HousesContainer from '../Pages/Houses/HousesContainer';

const Scandinavian = React.lazy(() => import("../Pages/Scandinavian/Scandinavian"));
const Designing = React.lazy(() => import("../Pages/Designing/Designing"));
const Consulting = React.lazy(() => import("../Pages/Consulting/Consulting"));
const NewsContainer = React.lazy(() => import("../Pages/News/NewsContainer"));
const Photos = React.lazy(() => import("../Pages/Photos/Photos"));


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
        path: getHousesItemRoute(),
        Component: HousesContainer,
        menuPath: getHousesRoute(),
        menuNum: 1,
    },
    {
        name: 'Фотогалерея',
        path: getPhotosRoute(),
        Component: Photos,
        lazyLoading: true,
        menuNum: 1,
    },
    {
        name: 'Скандинавские дома',
        path: getScandinavianRoute(),
        Component: Scandinavian,
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