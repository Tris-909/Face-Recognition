import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: conter;
    flex-direction: row;
    margin-bottom: 15px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: 2px solid #fff;
    background: #000;
    color: #fff;
    border-radius: 5%;
    margin-right: 25px;
`;

const ChooseFileButton = styled.button`
    padding: 10px 20px;
    border: 2px solid #fff;
    background: #000;
    color: #fff;
    border-radius: 5%;
    border-radius: 5%;
`;

const Options = ({  setOptions }) => {
    
    const onClickImgURL = () => {
        setOptions('ImgURL');
    }
    
    const onClickChooseFile = () => {
        setOptions('ChooseFile');
    }

    return(
        <Container>
            <div>
                <Button onClick={() => onClickImgURL()}>Using Image URL</Button>
                <ChooseFileButton onClick={() => onClickChooseFile()}>Choose File</ChooseFileButton>
            </div>
        </Container>
    );
}

export default Options;