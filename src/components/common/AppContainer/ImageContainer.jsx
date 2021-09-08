import React from 'react';
import Masonry from "react-masonry-css";

import AppContainerItem from "./AppContainerItem";


// Стили для Masonry находятся в App.css
const ImageContainer = ({children, breakpointColumnsObj, readyChildren}) => {
    const breakpointColumnsObjDefault = {
        default: 4,
        600: 3,
        430: 2,
    };

    return (
        <div>
            <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                <Masonry
                    breakpointCols={breakpointColumnsObj || breakpointColumnsObjDefault}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {children?.map((item, index) => <div key={item.toString() + index}>
                        {readyChildren ? item: <img src={item}/>}
                    </div>)}
                </Masonry>
            </AppContainerItem>
        </div>
    );
};

export default ImageContainer;