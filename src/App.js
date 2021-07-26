import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import './App.css';
import {db, storage} from "./firebase";
import {addUpdateHouse, getHouses} from "./store/housesReducer";


const App = ({houses, getHouses, addUpdateHouse}) => {
    const [imgURL, setImgURL] = useState(null);

    useEffect(() => {
        const unsubscribe = db.collection("houses")
            .onSnapshot(() => {
                getHouses();
            })

        return () => unsubscribe();
    }, [getHouses])

    const onSubmit = async (e) => {
        e.preventDefault();
        const houseName = e.target.houseName.value;
        if (!houseName) return

        await addUpdateHouse({houseName, imgURL});
    }

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const imgURL = await fileRef.getDownloadURL();
        setImgURL(imgURL);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type={"file"} onChange={onFileChange}/>
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
    );
}

const mapStateToProps = (state) => ({
    houses: state.houses.houses,
})

export default connect(mapStateToProps, {getHouses, addUpdateHouse})(App);