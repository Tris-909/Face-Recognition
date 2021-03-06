import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.25rem;
    padding: .5rem;
    width: 70%;

    @media screen and (max-width: 500px) {
        width: 90%;
    }
`;

const ContainerWidth = styled.div`
    width: '70%';
    display: flex;
    justify-content: center;

    @media screen and (max-width: 600px) {
        width: 90%;
        display: initial;
    }
`;

const Button = styled.button`
    width: 30%;
    margin-left: 20px;
    @media screen and (max-width: 600px) {
        margin: 2rem;
        width: 30%;
        display: initial;
    }
`;

export default function ImageLinkForm(props) {
    return (
        <div>
            <div className="center">
                <ContainerWidth>
                    <Input 
                        placeholder="Add your Image URL here" 
                        type="text" 
                        onChange={props.onInputChange} 
                        value={props.input} 
                        className="center"/>
                    <Button className="grow f4 link ph3 dib white bg-black b--white" onClick={props.onSubmit}> Detect </Button>
                </ContainerWidth>
            </div>
        </div>
    )
}
