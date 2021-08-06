import React from 'react';
import {ImageList, ImageListItem} from "@material-ui/core";
import drw1Img from "../../assets/Drawings/drw1.jpg";
import drw4Img from "../../assets/Drawings/drw4.jpg";
import drw2Img from "../../assets/Drawings/drw2.jpg";
import drw5Img from "../../assets/Drawings/drw5.jpg";
import drw3Img from "../../assets/Drawings/drw3.jpg";
import drw6Img from "../../assets/Drawings/drw6.jpg";
import drw7Img from "../../assets/Drawings/drw7.jpg";
import drw8Img from "../../assets/Drawings/drw8.jpg";
import drw9Img from "../../assets/Drawings/drw9.jpg";
import drw10Img from "../../assets/Drawings/drw10.jpg";
import drw11Img from "../../assets/Drawings/drw11.jpg";

const group1 = [
    {img: drw1Img, cols: 2, rows: 6,},
    {img: drw4Img, cols: 2, rows: 3,},
]

const group2 = [
    {img: drw2Img, cols: 2, rows: 4,},
    {img: drw5Img, cols: 2, rows: 5,},
]

const group3 = [
    {img: drw3Img, cols: 2, rows: 4,},
    {img: drw6Img, cols: 1, rows: 5,},
    {img: drw7Img, cols: 1, rows: 5,},
]

const group4 = [
    {img: drw8Img, cols: 2, rows:8,},
]

const group5 = [
    {img: drw9Img, cols: 2, rows: 4,},
    {img: drw10Img, cols: 2, rows: 4,},
]

const group6 = [
    {img: drw11Img, cols: 2, rows: 8,},
]

const drawings = [
    {cols: 2,rows: 9, group: group1},
    {cols: 4,rows: 9, group: group2},
    {cols: 6,rows: 9, group: group3},
    {cols: 5,rows: 9, group: group4},
    {cols: 3,rows: 9, group: group5},
    {cols: 4,rows: 9, group: group6},
]

const DrawingsGroup = ({children, groupCols, groupRows}) => {
    return (
        <ImageListItem rows={groupRows || 9} cols={groupCols || 6}>
            <ImageList rowHeight={50} cols={2}>
                {children.map(({img, cols, rows}) => {
                    return <ImageListItem key={img} cols={cols} rows={rows}>
                        <img src={img}/>
                    </ImageListItem>
                })}
            </ImageList>
        </ImageListItem>
    );
};

export default DrawingsGroup;
