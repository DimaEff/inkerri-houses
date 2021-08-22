import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";

import './App.css';
import {auth} from "./firebase";
import {getHouses} from "./store/housesReducer";
import {setCurrentUser} from "./store/userReducer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter/AppRouter";
import appRoutes from "./AppRouter/routes";
import AdminContainer from "./components/Admin/AdminContainer";
import SuccessAlert from "./components/common/Alerts/SuccessAlert";
import {getPhotosRoute} from "./AppRouter/consts";
import PhotosContainer from "./Pages/Photos/PhotosContainer";
import FailedAlert from "./components/common/Alerts/FailedAlert";
import sendEmail, {errorTemplate} from "./emailSendler";


export const AlertContext = React.createContext(null);

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
    const [openFailed, setOpenFailed] = useState(false);

    const TryToSubmitWithAlerts = (func) => async (data, e) => {
        try {
            await func(data, e);
            setOpenSuccess(true);
        } catch (error) {
            setOpenFailed(true);
        }
    }

    if (pathname === getPhotosRoute()) return <PhotosContainer />

    return (
        <div>
            <SuccessAlert open={openSuccess} handleClose={() => setOpenSuccess(false)}/>
            <FailedAlert open={openFailed} handleClose={() => setOpenFailed(false)}/>
            <AlertContext.Provider value={TryToSubmitWithAlerts}>
                <Header />
                <AdminContainer />
                <AppRouter routes={appRoutes}/>
                <Footer />
            </AlertContext.Provider>
        </div>
    )
};

export default connect(null, {getHouses, setCurrentUser})(App);