import styled from "styled-components"

const HistoryContainer = styled.main`
    flex: 1;
    padding: 2rem;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme['gray-100']};
    }
`

const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 1rem;
    max-height: 500px;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
            background-color: ${props => props.theme['gray-600']};
            padding: 1rem;
            text-align: left;
            color: ${props => props.theme['gray-100']};
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }

        td {
            background-color: ${props => props.theme['gray-700']};
            border-top: 4px solid ${props => props.theme['gray-800']};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                width: 50%;
                padding-left: 1.5rem;
            }

            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`

const STATUS_COLOR = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
}

type TStatusProps = {
    // Browser gets mad with camelCase here
    statuscolor: 'yellow' | 'red' | 'green'
}

const Status = styled.span<TStatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 999px;
        background: ${props => props.theme[STATUS_COLOR[props.statuscolor]]};
    }
`

export { HistoryContainer, HistoryList, Status }
