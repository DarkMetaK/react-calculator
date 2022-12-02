import styled from "styled-components"

export const ButtonContainer = styled.button`
    padding: 10px;
    background-color: ${props => props.theme.bg};
    color: #252525;
    font-size: 2em;
    font-weight: 700;
    cursor: pointer;
    max-width: 70px;
    width: 100%;
    border: none;
    border-bottom: 5px solid ${props => props.theme.shadow};
    border-radius: 10px;
    box-shadow: 1px 0px 0px ${props => props.theme.shadow};

    &:hover {
        opacity: 0.6;
    }
`
export const Highlight = {
    bg: '#FE7E00',
    shadow: '#E86607'
}

ButtonContainer.defaultProps = {
    theme: {
        bg: '#fff',
        shadow: '#E0EAEB'
    }
}