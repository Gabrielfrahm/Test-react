import styled from 'styled-components';

export const Container = styled.div`
    height: 85vh;
    width: 100vw;
    display: flex;
    align-items: stretch; 
`;


export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    font-style: italic;

   
`
export const Content = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    padding: 80px;
    height: 80px;

    span {
        font-size: 17px;
        font-style: italic;
        padding: 0 15px 0 45px;
        color: #868686;
    }
`;
