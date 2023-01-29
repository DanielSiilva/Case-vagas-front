import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    
    span{
        font-family: 'Inter';
        font-size: 18px;
        line-height: 21px;

        color: #071723;

    }



    div{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg{
            background-color: ${props => props.theme['Dark-blue-grey']};
            color: ${props => props.theme['White']};

            border-radius: 4px;
            padding: 0.2rem;
            width: 2rem;
            height: 2rem;

            cursor: pointer;
        }

        p{
            border: 1px solid red;

            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;

            width: 3.5rem;
            height: 2rem;

            font-size: 18px;
            font-weight:bold;

            background: #DDE3E9;
            border: 1px solid #2F3676;
            border-radius: 4px;
        }
    }

`