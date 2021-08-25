import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";

import './App.css';
import {auth} from "./firebase";
import {setHouses, setMinMaxValues} from "./store/housesReducer";
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
import {firestoreCollections} from "./utils/consts";
import useSubscribeCollection from "./hooks/useSubscribeCollection";
import {setBanners} from "./store/bannersReducer";


export const AlertContext = React.createContext(null);

const App = ({setBanners, setHouses, setMinMaxValues, setCurrentUser}) => {
    const {pathname} = useLocation();

    const setHousesAndMinMaxValues = async (houses) => {
        await setHouses(houses);
        setMinMaxValues();
    }
    useSubscribeCollection(firestoreCollections.houses, setHousesAndMinMaxValues)

    useSubscribeCollection(firestoreCollections.banners, setBanners)

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
            console.error(error.message);
        }
    }

    if (pathname === getPhotosRoute()) return <PhotosContainer/>

    return (
        <div>
            <SuccessAlert open={openSuccess} handleClose={() => setOpenSuccess(false)}/>
            <FailedAlert open={openFailed} handleClose={() => setOpenFailed(false)}/>
            <AlertContext.Provider value={TryToSubmitWithAlerts}>
                <Header/>
                <AdminContainer/>
                <AppRouter routes={appRoutes}/>
                <Footer/>
            </AlertContext.Provider>
        </div>
    )
};

export default connect(
    null,
    {
        setBanners,
        setHouses,
        setMinMaxValues,
        setCurrentUser
    })(App);