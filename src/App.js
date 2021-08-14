import React, {useEffect} from "react";
import {connect} from "react-redux";

import './App.css';
import {auth} from "./firebase";
import {getHouses} from "./store/housesReducer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter/AppRouter";
import appRoutes from "./AppRouter/routes";
import AdminContainer from "./components/Admin/AdminContainer";
import {setCurrentUser} from "./store/userReducer";


const App = ({getHouses, setCurrentUser}) => {
    useEffect(() => {
        getHouses();
    }, [getHouses])

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    }, [setCurrentUser])

    return (
        <div>
            <Header />
            <AdminContainer />
            <AppRouter routes={appRoutes}/>
            <Footer />
        </div>
    );
}

export default connect(null, {getHouses, setCurrentUser})(App);