import styled from 'styled-components';

interface ButtonProps {
    color: string
}


export const Container = styled.button<ButtonProps>`
    width: 113px;
    height: 34px;
    border: 2px solid ${props => props.color};
    border-radius: 25px;
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    color: ${props => props.color};
    margin-left: 23px;

    &:hover,:active{
        color: #fff;
        background-color: ${props => props.color};
    }
`;