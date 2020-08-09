import React from 'react'
import styled from 'styled-components';

const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
div {
  box-sizing: border-box;
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
  position: fixed;
  top: 70%;
  left: 45%;
  transform: translate(-50%, -50%);
}
div:nth-child(1) {
    animation-delay: -0.45s;
}
div:nth-child(2) {
    animation-delay: -0.3s;
}
div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
}  
`;

export default function SpinnerLoading() {
    return (
        <Spinner><div></div><div></div><div></div><div></div></Spinner>
    )    
}