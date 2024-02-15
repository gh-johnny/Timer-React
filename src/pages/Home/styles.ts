import styled from "styled-components";

const HomeContainer = styled.main`
    flex: 1;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }

`

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
    
`

const CountDownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        background-color: ${props => props.theme['gray-700']};
        padding: 1.25rem 2rem;
        border-radius: 8px;
    }
`

const Separator = styled.div`
    padding: 2rem 0;
    color: ${({ theme }) => theme['green-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export { HomeContainer, CountDownContainer, FormContainer, Separator }
