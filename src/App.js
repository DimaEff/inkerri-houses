import React, {useEffect} from "react";
import {connect} from "react-redux";

import './App.css';
import {db} from "./firebase";
import {addUpdateHouse, getHouses} from "./store/housesReducer";
import {addUpdateNewsItem, getNews} from "./store/newsReducer";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import LoginForm from "./components/LoginForm/LoginForm";


const App = ({houses, news, getHouses, addUpdateHouse, getNews, addUpdateNewsItem}) => {
    useEffect(() => {
        const unsubscribe = db.collection("houses")
            .onSnapshot(() => {
                getHouses();
            })

        return () => unsubscribe();
    }, [getHouses])

    useEffect(() => {
        getNews()
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
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{border: '1px solid red'}}>
                    <form onSubmit={addHouse}>
                        <input type={"file"} name={'imgURL'}/>
                        <input type="text" name={'houseName'} placeholder={'name'}/>
                        <button>submit</button>
                    </form>
                    {
                        houses.map(house => <div key={house.houseName}>
                            <img style={{height: '100px', width: '100px',}} src={house.imgURL} alt={house.houseName}/>
                            {house.houseName}
                        </div>)
                    }
                </div>
                <div style={{border: '1px solid green'}}>
                    <form onSubmit={addNewsItem}>
                        <input type={"file"} name={'imgURL'}/>
                        <input type={"text"} name={'title'} placeholder={'title'}/>
                        <button>submit</button>
                    </form>
                    {
                        news.map(newsItem => <div key={newsItem.houseName}>
                            <img style={{height: '100px', width: '100px',}} src={newsItem.imgURL} alt={newsItem.title}/>
                            {newsItem.houseName}
                        </div>)
                    }
                </div>
            </div>
            <FeedbackForm templateVariant={1} buttonText={'Заказать звонок'}>
                {{
                    fields: [
                        {name: "username", placeholder: 'Имя*', type: "text"},
                        {name: "surname", placeholder: 'Фамилия*', type: "text"},
                        {name: "email", placeholder: 'Email*', type: "email"},
                        {name: "phone", placeholder: 'Номер телефона*', type: "text"},
                    ]
                }}
            </FeedbackForm>
            <LoginForm />
        </div>
    );
}

const mapStateToProps = (state) => ({
    houses: state.houses.houses,
    news: state.news.news,
})

export default connect(mapStateToProps, {getHouses, addUpdateHouse, getNews, addUpdateNewsItem})(App);