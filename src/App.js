import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as yup from 'yup';

import './App.css';
import {auth, db} from "./firebase";
import {addUpdateHouse, getHouses} from "./store/housesReducer";
import {addUpdateNewsItem, getNews} from "./store/newsReducer";
import {setCurrentUser, logout} from "./store/userReducer";
import NeedHelp from "./components/NeedHelp/NeedHelp";
import ConsultingConstruction from "./components/ConsultingConstruction/ConsultingConstruction";
import Advantages from "./components/Advantages/Advantages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ModernHousesDesign from "./components/ModernHousesDesign/ModernHousesDesign";
import Economy from "./components/Economy/Economy";
import DesigningSteps from "./components/DesigningSteps/DesigningSteps";
import Drawings from "./components/Drawings/Drawings";
import HowBuild from "./components/HowBuild/HowBuild";
import WeDo from "./components/WeDo/WeDo";
import WhyWe from "./components/WhyWe/WhyWe";
import Home from "./Pages/Home/Home";
import WhyScandinavian from "./components/WhyScandinavian/WhyScandinavian";
import AppRouter from "./AppRouter/AppRouter";
import appRoutes from "./AppRouter/routes";


const App = ({houses, news, user, getHouses, addUpdateHouse, getNews, addUpdateNewsItem, logout, setCurrentUser}) => {
    useEffect(() => {
        const unsubscribe = db.collection("houses")
            .onSnapshot(() => {
                getHouses()
            })

        return () => unsubscribe();
    }, [getHouses])

    useEffect(() => {
        getNews()
    }, [])

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    }, [])

    const addHouse = async (e) => {
        e.preventDefault();
        const file = e.target.imgURL.files[0];
        const houseName = e.target.houseName.value;
        if (!houseName) return

        await addUpdateHouse(file, {houseName});
    }

    const addNewsItem = async (e) => {
        e.preventDefault();
        const file = e.target.imgURL.files[0];
        const houseName = e.target.title.value;
        if (!houseName) return

        await addUpdateNewsItem(file, {houseName});
    }

    return (
        <div>
            <Header />
            <AppRouter routes={appRoutes}/>
            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => ({
    houses: state.houses.houses,
    news: state.news.news,
    user: state.user.user,
})

export default connect(mapStateToProps, {
    getHouses,
    addUpdateHouse,
    getNews,
    addUpdateNewsItem,
    logout,
    setCurrentUser
})(App);