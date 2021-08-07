import React from 'react';
import {useParams} from "react-router-dom";

const Houses = () => {
    const {houseId} = useParams();

    return (
        <div>
            Houses {houseId}
        </div>
    );
};

export default Houses;