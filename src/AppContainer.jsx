import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import './App.css';
import {auth} from "./firebase";
import {setHouses, setMinMaxValues} from "./store/housesReducer";
import {setCurrentUser} from "./store/userReducer";
import SuccessAlert from "./components/common/Alerts/SuccessAlert";
import FailedAlert from "./components/common/Alerts/FailedAlert";
import {firestoreCollections} from "./utils/consts";
import useSubscribeCollection from "./hooks/useSubscribeCollection";
import {setBanners} from "./store/bannersReducer";
import {setAlbums} from "./store/albumsReducer";
import App from "./App";


export const AlertContext = React.createContext(null);

const AppContainer = ({setBanners, setHouses, setMinMaxValues, setCurrentUser, setAlbums}) => {
    const setHousesAndMinMaxValues = async (houses) => {
        await setHouses(houses);
        setMinMaxValues();
    };
    useSubscribeCollection(firestoreCollections.houses, setHousesAndMinMaxValues);
    useSubscribeCollection(firestoreCollections.banners, setBanners);
    useSubscribeCollection(firestoreCollections.albums, setAlbums);

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

    return (
        <div>
            <SuccessAlert open={openSuccess} handleClose={() => setOpenSuccess(false)}/>
            <FailedAlert open={openFailed} handleClose={() => setOpenFailed(false)}/>
            <AlertContext.Provider value={TryToSubmitWithAlerts}>
               <App />
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
        setCurrentUser,
        setAlbums,
    })(AppContainer);