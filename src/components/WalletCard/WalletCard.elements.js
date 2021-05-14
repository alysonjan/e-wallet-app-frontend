import styled from 'styled-components';

export const WalletCard = styled.div`
    height:10vh;
    background: #1a1919;
    display: flex;  
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin:5% 0 5% 0;
    padding:10px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.2);

`

export const WalletBalance = styled.h1`
    font-size: 2rem;
    color: #31eec2;
    margin:10px 0 10px 0;


    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`