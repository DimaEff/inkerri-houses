import React from "react";

import {
    getHomeRoute,
    getNewsRoute,
    getHousesRoute,
    getPhotosRoute,
    getScandinavianRoute,
    getDesigningRoute,
    getConsultingRoute,
} from "./consts";
import Home from "../Pages/Home/Home";
import HousesContainer from '../Pages/Houses/HousesContainer';

const Scandinavian = React.lazy(() => import("../Pages/Scandinavian/Scandinavian"));
const Designing = React.lazy(() => import("../Pages/Designing/Designing"));
const Consulting = React.lazy(() => import("../Pages/Consulting/Consulting"));
const News = React.lazy(() => import("../Pages/News/News"));
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
        path: getNewsRoute(''),
        Component: News,
        lazyLoading: true,
        menuNum: 1,
    },
    {
        name: 'Готовые проекты',
        path: getHousesRoute(''),
        Component: HousesContainer,
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