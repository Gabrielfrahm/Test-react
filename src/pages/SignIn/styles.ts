import styled from 'styled-components';

export const Container = styled.div`
    height: 94vh;
    width: 100vw;
    display: flex;
    align-items: stretch;
    
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;

    button {
            color: #707070;
            border:none;
            background: transparent;
            font-size: 30px;
            padding: 22px 90px 33px 90px;
            font-style: italic;
            font-weight: bold;
        }
    
`;

export const Form = styled.form`
    margin-top: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
        
    h1 {
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 26px;
        font-style: italic;
    }

    div {
        background-color: #FFFFFF;
        border: 2px solid #EBEBEB;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        -webkit-box-shadow: 5px 7px 5px -2px rgba(0,0,0,0.39);
        -moz-box-shadow: 5px 7px 5px -2px rgba(0,0,0,0.39);
        box-shadow: 5px 7px 5px -2px rgba(0,0,0,0.39); 

        input {
            width: 100%;
            height: 60px;
            background: transparent;
            border: none;
            border-bottom: 1px;
            padding: 16px;
            font-size: 16px;
            font-style: italic;

            & + input {
                border-top: 1px solid #EBEBEB;
                border-bottom: 1px solid #EBEBEB;
            }

            &::-webkit-input-placeholder {
                font-size: 15px;
                color: #9D9D9D;
                font-style: italic;
            }
        }

        a {
            list-style: none;
            text-decoration: none;
            color: #C1C1C1;
            font-style: italic;
            font-size: 14px;
            align-self: flex-end;
            padding: 16px;
        }

        button {
            color: #B5C401;
            border:none;
            background: transparent;
            font-size: 30px;
            padding: 22px 90px 33px 90px;
            font-style: italic;
            font-weight: bold;
        }
    }
`;

export const Presentation = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    

    h1 {
        font-size: 65px;
        max-width: 244px;
        font-weight: bold;
        text-align: center;
    }

    span {
        background-color: #B5C401;
        width:144px;
        padding: 7px;
        color: #fff;
        font-size: 22px;
        border-radius: 25px;
        text-align: center;
        margin: 37px 0 26px;
    }

    @media (max-width: 800px){
        display: none;
    }
    
`;


export const Footer = styled.footer`
    display: flex;
    justify-content:center;
    align-items: center;
    border-top: 2px solid #EBEBEB;
    bottom: 0;
    p{
        margin-top: 21px;
    }
`;