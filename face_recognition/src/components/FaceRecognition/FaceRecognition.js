import React from 'react'
import BorderBox from '../BorderBox/BorderBox';
import styled from 'styled-components';

const ImageContainer = styled.div`
    width: 50%;
    height: 500px;
    margin-top: 20px;
    margin-bottom: 30px;
    position: relative;
`;

const BorderBoxAroundFacesContainer = styled.div`
    width: 759.6px;
    height: 500px;
    position: relative;
    margin: auto;
    box-sizing: border-box;
`;

export default function FaceRecognition(props) {
    
    let boxAroundFaces = props.boundingBox.map(singleItem => {
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
    });

    return (
        <ImageContainer className="center">
        <div style={{
                position: 'absolute'
            }} className="mt2">
               {boxAroundFaces}
            <img
            style={{
                width: '759.6px',
                height: '500px',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} 
            src={`${props.imageUrl}`}
            alt="Recognition" />
         </div>
        </ImageContainer>
    )
}
