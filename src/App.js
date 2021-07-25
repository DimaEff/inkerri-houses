import React, {useState, useEffect} from "react";

import {app} from "./firebase";


const db = app.firestore();

function App() {
    const [imgURL, setImgURL] = useState(null);
    const [houses, setHouses] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const houseName = e.target.houseName.value;
        if (!houseName) return

        db.collection('houses').doc(houseName).set({
            houseName,
            imgURL,
        })
    }

    useEffect(() => {
        const getHouses = async () => {
            const housesCollection = await db.collection('houses').get();
            setHouses(housesCollection.docs.map(doc => {
                return doc.data();
            }));
        }
        getHouses();
    }, [])

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
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
            {houses.map(house => <div key={house.houseName}>
                <img style={{height: '100px', width: '100px',}} src={house.imgURL} alt={house.houseName}/>
                {house.houseName}
            </div>)}
        </div>
    );
}

export default App;
