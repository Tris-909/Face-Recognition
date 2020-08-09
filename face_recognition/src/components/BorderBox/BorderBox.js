import React, {useEffect} from 'react'
import styled from 'styled-components';

const Border = styled.div`
    position: absolute;
    box-shadow: 0 0 0 3px #149df2 inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
`;

export default function BorderBox({top, right, left, bottom, height, width}) { 
    return (
        <Border 
        style={{
            top: `${top}%`,
            right: `${right}%`,
            bottom: `${bottom}%`,
            left: `${left}%`,
            height: `${height}%`,
            width: `${width}%`
        }}>
        </Border>
    )
}
