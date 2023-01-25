import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10rem;

    width: 100vw;
    height: 30vh;
    padding: 2rem;

    background-color: ${props => props.theme['Dark-grey-blue']};
    

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: ${props => props.theme['White']};
    width: 15.625rem;

    span{
        font-family: 'Inter';
        font-size: 26px;
        line-height: 28px;
    }

    p{
        font-family: 'Inter';
        font-size: 26px;
        line-height: 28px;
        font-weight: bold;
    
    }
`