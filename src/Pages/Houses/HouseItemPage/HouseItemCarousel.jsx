import React from 'react';

import MyCarousel from "../../../components/Carousel/Carousel";


const HouseItemCarousel = ({children, ...props}) => {
    return (
        <div>
            <MyCarousel {...props}>
                {children.map(img => <div style={{height: '100%', display: 'flex', alignItems: 'center'}} key={img}>
                    <img src={img}/>
                </div>)}
            </MyCarousel>
        </div>
    );
};

export default HouseItemCarousel;