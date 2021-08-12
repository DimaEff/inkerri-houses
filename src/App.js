import React, {useEffect} from "react";
import {connect} from "react-redux";

import './App.css';
import {auth} from "./firebase";
import {addUpdateHouse, getHouses} from "./store/housesReducer";
import {addUpdateNewsItem, getNews} from "./store/newsReducer";
import {setCurrentUser, logout} from "./store/userReducer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter/AppRouter";
import appRoutes from "./AppRouter/routes";
import AdminContainer from "./components/Admin/AdminContainer";


const App = ({houses, news, user, getHouses, addUpdateHouse, getNews, addUpdateNewsItem, logout, setCurrentUser}) => {
    useEffect(() => {
        getHouses()
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
            <AdminContainer />
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