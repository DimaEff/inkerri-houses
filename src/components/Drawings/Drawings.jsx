import React from 'react';
import {ImageList, ImageListItem} from "@material-ui/core";

import AppContainer from "../common/AppContainer/AppContainer";
import AppContainerItem from "../common/AppContainer/AppContainerItem";
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
import DrawingsGroup from "./DrawingsGroup";


const Drawings = ({grey}) => {
    const group1 = [

    ]

    const group2 = [

    ]

    const group3 = [

    ]

    const group4 = [
    ]

    const group5 = [

    ]

    const group6 = [
    ]

    const drawings = [
        {img: drw1Img, cols: 2, rows: 6,},
        {img: drw2Img, cols: 4, rows: 4,},
        {img: drw3Img, cols: 6, rows: 4,},
        {img: drw4Img, cols: 2, rows: 4,},
        {img: drw5Img, cols: 4, rows: 5,},
        {img: drw6Img, cols: 3, rows: 5,},
        {img: drw7Img, cols: 3, rows: 5,},
        {img: drw8Img, cols: 5, rows:8,},
        {img: drw9Img, cols: 3, rows: 4,},
        {img: drw10Img, cols: 3, rows: 4,},
        {img: drw11Img, cols: 4, rows: 8,},
    ]

    return (
        <AppContainer withoutTitle grey={grey}>
            <AppContainerItem lg={12} md={12} sm={12} xs={12}>
                <div style={{}}>
                    {drawings.map(({img}) => <img style={{display: 'block', maxWidth: '200px'}} src={img}/>)}

                    {/*<img src={drw1Img} alt=""/>*/}
                    {/*<img src={drw2Img} alt=""/>*/}
                    {/*<img src={drw3Img} alt=""/>*/}
                    {/*<img src={drw4Img} alt=""/>*/}
                    {/*<img src={drw5Img} alt=""/>*/}
                    {/*<img src={drw6Img} alt=""/>*/}
                    {/*<img src={drw7Img} alt=""/>*/}
                    {/*<img src={drw8Img} alt=""/>*/}
                    {/*<img src={drw9Img} alt=""/>*/}
                    {/*<img src={drw10Img} alt=""/>*/}
                    {/*<img src={drw11Img} alt=""/>*/}
                </div>
                {/*<ImageList rowHeight={50} cols={12}>*/}
                {/*    {drawings.map(({img, cols, rows}) => {*/}
                {/*        return <ImageListItem key={img} cols={cols} rows={rows}>*/}
                {/*            <img src={img}/>*/}
                {/*        </ImageListItem>*/}
                {/*    })}*/}
                {/*</ImageList>*/}
            </AppContainerItem>
        </AppContainer>
    );
};

export default Drawings;
