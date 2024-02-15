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
        gap: 2.5rem;
    }
`

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    color: ${props => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    font-weight: bold;
    font-size: inherit;
    padding: 0 0.5rem;
    color: ${({ theme }) => theme['gray-100']};
    border-radius: 2px;

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme['green-500']};
    }

    &::placeholder {
        color: ${props => props.theme['gray-500']};
    }
`

const TaskInput = styled(BaseInput)`
    flex: 1;
`

const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
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
        padding: 2rem 1rem;
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

const StartCountDownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    background: ${props => props.theme['green-500']};
    color: ${props => props.theme['gray-100']};

    &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export { HomeContainer, CountDownContainer, FormContainer, Separator, StartCountDownButton, TaskInput, MinutesAmountInput }
