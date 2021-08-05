import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as yup from 'yup';

import './App.css';
import {auth, db} from "./firebase";
import {addUpdateHouse, getHouses} from "./store/housesReducer";
import {addUpdateNewsItem, getNews} from "./store/newsReducer";
import {setCurrentUser, logout} from "./store/userReducer";
import AppContainer from "./components/common/AppContainer/AppContainer";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import {callOrderTemplate} from "./utils/consts";
import {Grid} from "@material-ui/core";
import NeedHelp from "./components/NeedHelp/NeedHelp";
import ConsultingConstraction from "./components/ConsultingConstruction/ConsultingConstraction";
import Advantages from "./components/Advantages/Advantages";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";




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
            <ConsultingConstraction/>
            <Advantages grey/>
            <NeedHelp/>
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