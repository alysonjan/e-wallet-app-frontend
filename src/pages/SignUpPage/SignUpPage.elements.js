import styled from 'styled-components';
import { GiWallet } from 'react-icons/gi';
import {Link} from 'react-router-dom';


export const LoginPageWrap = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const LoginPageContainer = styled.div`
    width: 340px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 24px;
    color: green;
    font-size: 3rem;
`

export const Header = styled.div`
    font-size: 2rem;
    text-align: center;
    color: green;
    margin-bottom: 16px;
`

export const MainLogo = styled(GiWallet)`
 margin: 0;
`;

export const FORM__ITEM__ROW = styled.div`
display: flex;
justify-content: space-between;
margin: 1rem 0;
`;

export const FormWrapper = styled.form`
width: 100%;
display: flex;
flex-direction: column;
`;

export const FormField = styled.div`
 margin-top: 5px;
 margin-bottom: 15px;
 display: flex;
 flex-direction: column;
 width: 100%;
`;

export const Label = styled.label`
 margin-bottom: 7px;
 font-weight: 500;
 font-size: 14px;
 text-align: left;
 color: #fff;
`;

export const Text = styled.input`
 padding: 5px 12px;
 font-size: 14px;
 line-height: 20px;
 color: black;
 border: 1px solid black;
 border-radius: 6px;
 &:focus {
    border-color: #aaaaaa;
    outline: none;
 }
`;

export const LoginButton = styled.button`
 width: 100%;
 font-weight: 500;
 font-size: 1rem;
 padding: 7px 19px;
 cursor: pointer;
 border: 1px solid;
 border-radius: 6px;
 color: #ffff;
 text-align: center;
 background-color: #02b16e;
 &:hover {
    background-color: black;
    transition: 825ms cubic-bezier(0, 0, 0.2, 1) 0ms;
 }
`;
export const CardContainer = styled.div`
 width: 100%;
 padding: 20px;
 background-color: #1e2020;
 border-radius: 6px;
`;

export const TextLabel = styled.h5`
 padding:10px;
`;

export const TextSignup = styled(Link)`
 font-size: 1rem;
 color:#7CE4CC;
 text-decoration:none;
`;


