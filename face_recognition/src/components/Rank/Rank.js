import React from 'react'
import styled from 'styled-components';

const Title = styled.div`
    font-size: 2.5rem;
    color: #fff;
`;


export default function Rank() {
    return (
        <div>
            <Title>
                {`Hi, Welcome to Face Recognition `}
            </Title>
            <p className="f3 white">
                {`Face Recognition will detect faces in your picture, please give it a try`}
            </p>
        </div>
    );
}
