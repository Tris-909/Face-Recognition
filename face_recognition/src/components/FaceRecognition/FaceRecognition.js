import React from 'react'
import styled from 'styled-components';

const ImageContainer = styled.div`
    width: 50%;
    height: 500px;
    margin-top: 20px;
    margin-bottom: 30px;
`;

export default function FaceRecognition(props) {
    return (
        <ImageContainer className="center">
            <img
            style={{
                width: '100%',
                height: '100%',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} 
            src={`${props.imageUrl}`}
            alt="Recognition" />
        </ImageContainer>
    )
}
