import styled from "styled-components"

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

const BaseCountDownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    color: ${props => props.theme['gray-100']};

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

const StartCountDownButton = styled(BaseCountDownButton)`

    background: ${props => props.theme['green-500']};

    &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
    }

`

const StopCountDownButton = styled(BaseCountDownButton)`
    background: ${props => props.theme['red-500']};

    &:not(:disabled):hover {
        background: ${props => props.theme['red-700']};
    }
`

export { CountDownContainer, Separator, StartCountDownButton, StopCountDownButton }
