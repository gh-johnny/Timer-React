import styled from 'styled-components'

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

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`

export {  FormContainer, TaskInput, MinutesAmountInput }
