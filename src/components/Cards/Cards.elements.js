import styled from 'styled-components';


export const CardMainContainer = styled.div`
    display:flex;
    flex-direction:row;

`
export const CardContainer = styled.div`
    width: 70%;
    height: 100%;
    
`
export const CardWrapper = styled.div`
    height:100%;
    margin: 0 auto;
    padding: 10px 10px;
`
export const Cards = styled.div`
    background: #1a1919;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin:5% 0 5% 0;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const CardImage = styled.img`
    width: 100%;
    object-fit: cover;

`

export const CardTitle = styled.h1`
    font-size: 1.25rem;
    color: #31eec2;
    margin:10px 0 10px 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const CardPrice = styled.p`
    font-size: 0.75rem;
    color: #ffd311;
`
export const CardDescription = styled.p`
    font-size: 0.75rem;
    text-align: center;
    color: #fff;
    margin: 5px;
`