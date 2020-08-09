import React from 'react'
import BorderBox from '../BorderBox/BorderBox';
import styled from 'styled-components';

const ImageContainer = styled.div`
    width: 50%;
    height: 500px;
    margin-top: 20px;
    margin-bottom: 30px;
    position: relative;

    @media screen and (max-width: 500px) {
        width: 90%;
    }
`;

const Image = styled.img`
    width: 759.6px;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 500px) {
        height: 350px;
    }
`;

export default function FaceRecognition(props) {
    let boxAroundFaces = props.boundingBox !== undefined ? props.boundingBox.map(singleItem => {
        const top = singleItem.region_info.bounding_box.top_row*100;
        const bottom = singleItem.region_info.bounding_box.bottom_row*100;
        const left = singleItem.region_info.bounding_box.left_col*100;
        const right = singleItem.region_info.bounding_box.right_col*100;


        return (
            <BorderBox 
            key={singleItem.id}
            top={top} 
            left={left} 
            bottom={bottom} 
            right={right} 
            height={ top > bottom ? (top - bottom) : (bottom-top)  }
            width={ left > right ? (left-right) : (right-left) }
            />
        );
    }) : null;

    return (
        <ImageContainer className="center">
        <div style={{
                position: 'absolute'
            }} className="mt2">
               {boxAroundFaces}
            <Image
            src={`${props.imageUrl}`}
            alt="Recognition" />
         </div>
        </ImageContainer>
    )
}
