import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";

import './App.css';
import {auth} from "./firebase";
import {getHouses} from "./store/housesReducer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter/AppRouter";
import appRoutes from "./AppRouter/routes";
import AdminContainer from "./components/Admin/AdminContainer";
import {setCurrentUser} from "./store/userReducer";
import SuccessAlert from "./components/common/Alerts/SuccessAlert";
import {getPhotosRoute} from "./AppRouter/consts";
import PhotosContainer from "./Pages/Photos/PhotosContainer";


export const SuccessContext = React.createContext(null);

const App = ({getHouses, setCurrentUser}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        getHouses();
    }, [getHouses])

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    }, [setCurrentUser])

    const [openSuccess, setOpenSuccess] = useState(false);

    if (pathname === getPhotosRoute()) return <PhotosContainer />

    return (
        <div>
            <SuccessAlert open={openSuccess} handleClose={() => setOpenSuccess(false)}/>
            <SuccessContext.Provider value={setOpenSuccess}>
                <Header/>
                <AdminContainer/>
                <AppRouter routes={appRoutes}/>
                <Footer/>
            </SuccessContext.Provider>
        </div>
    );
}

export default connect(null, {getHouses, setCurrentUser})(App);