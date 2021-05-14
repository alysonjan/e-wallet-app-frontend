import styled from 'styled-components'


export const Button = styled.button`
    border-radius: 50px;
    margin: 10px;
    background: ${({primary}) => (primary ? '#31eec2' : '#dfdfdf') };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#dfdfdf' : '#000000')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#31eec2')};
    }
`;