import React from 'react';
import Masonry from "react-masonry-css";

import AppContainerItem from "./AppContainerItem";


// Стили для Masonry находятся в App.css
const ImageContainer = ({children, breakpointColumnsObj, ...props}) => {
    const breakpointColumnsObjDefault = {
        default: 4,
        600: 3,
        430: 2,
    };

    return (
        <div {...props}>
            <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                <Masonry
                    breakpointCols={breakpointColumnsObj || breakpointColumnsObjDefault}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {children.map(img => <div key={img}>
                        <img src={img}/>
                    </div>)}
                </Masonry>
            </AppContainerItem>
        </div>
    );
};

export default ImageContainer;