import React from 'react';
import styled from 'styled-components';

const ContainerWidth = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 600px) {
        width: 90%;
        display: initial;
    }
`;

const Button = styled.button`
    margin-left: 20px;
    @media screen and (max-width: 600px) {
        margin: 2rem;
        width: 30%;
        display: initial;
    }
`;

const ChooseFile = ({ setImgURL, onSubmit, onChangeInputHandler }) => { 
    
    const onChangeHandler = (event) => {
        setImgURL(URL.createObjectURL(event.target.files[0]));
        onChangeInputHandler(event);
    }

    return(
        <ContainerWidth>
            <input type='file' onChange={(event) => onChangeHandler(event)}/>
            <Button className="grow f4 link ph3 dib white bg-black b--white" onClick={onSubmit}> Detect </Button>
        </ContainerWidth>
    );
}

export default ChooseFile;