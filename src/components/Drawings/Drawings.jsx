import React from 'react';

import AppContainer from "../common/AppContainer/AppContainer";
import ImageContainer from "../common/AppContainer/ImageContainer";
import drw1Img from '../../assets/Drawings/drw1.jpg';
import drw2Img from '../../assets/Drawings/drw2.jpg';
import drw3Img from '../../assets/Drawings/drw3.jpg';
import drw4Img from '../../assets/Drawings/drw4.jpg';
import drw5Img from '../../assets/Drawings/drw5.jpg';
import drw6Img from '../../assets/Drawings/drw6.jpg';
import drw7Img from '../../assets/Drawings/drw7.jpg';
import drw8Img from '../../assets/Drawings/drw8.jpg';
import drw9Img from '../../assets/Drawings/drw9.jpg';
import drw10Img from '../../assets/Drawings/drw10.jpg';
import drw11Img from '../../assets/Drawings/drw11.jpg';


const Drawings = ({grey}) => {
    const drawings = [
        drw2Img,
        drw3Img,
        drw5Img,
        drw1Img,
        drw6Img,
        drw7Img,
        drw8Img,
        drw4Img,
        drw9Img,
        drw11Img,
        drw10Img,
    ]

    return (
        <AppContainer withoutTitle grey={grey}>
            <ImageContainer>
                {drawings}
            </ImageContainer>
        </AppContainer>
    );
};

export default Drawings;
