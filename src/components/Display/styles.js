import styled from "styled-components"

export const InputContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #D2E2F1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    font-family: 'Roboto';
    border-radius: 8px;
    border-bottom: 8px solid #C3D4E4;
    margin-bottom: 20px;
    position: relative;

    input {
        width: 100%;
        height: 50px;
        margin-top: auto;
        background-color: #D2E2F1;
        border: 0;
        text-align: right;
        font-size: 24px;
        font-family: 'Roboto';
        padding: 0 10px;
        color: #252525;
        font-weight: 700;
        border-radius: 8px;
    }

    p {
        position: absolute;
        top: 0;
        margin-right: 8px;
        opacity: 0.3;
        font-size: 20px;
    }
`