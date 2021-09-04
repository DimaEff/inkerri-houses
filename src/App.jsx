import React from 'react';

import Header from "./components/Header/Header";
import AdminContainer from "./components/Admin/AdminContainer";
import AppRouter from "./AppRouter/AppRouter";
import appRoutes from "./AppRouter/routes";
import Footer from "./components/Footer/Footer";
import {useLocation} from "react-router-dom";
import {getPhotosRoute} from "./AppRouter/consts";
import PhotosContainer from "./Pages/Photos/PhotosContainer";


const App = () => {
    const {pathname} = useLocation();
    if (pathname === getPhotosRoute()) return <PhotosContainer />

    return (
        <>
            <Header/>
            <AdminContainer/>
            <AppRouter routes={appRoutes}/>
            <Footer/>
        </>
    );
};

export default App;
