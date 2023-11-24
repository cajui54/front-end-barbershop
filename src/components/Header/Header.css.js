import styled from 'styled-components';

export const Header = styled.header`
    height: 60px;
    background-color: #020617;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    width: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
    color: #fff;

    svg {
        color: #a8a29e;
        font-size: 2.5rem;
    }
    h2 {
        font-size: 1.2rem;
        letter-spacing: .2rem;
    }
    h3 {
        margin-top: -4px;
        letter-spacing: .1rem;
        color: #fcd34d;
    }
`

export const TimeContainer = styled.div`
    margin-right: 1rem;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >span:first-child {
        color: #fff;    
        font-size: 2.5rem;
        letter-spacing: .2rem;
    }
    >div {
        color: #fcd34d;
        font-size: 1.4rem;
    }
    >div span{
        margin: 0 .2rem;
    }
`
