import styled from 'styled-components'

const LayoutContainer = styled.div`

    max-width: 74rem;
    min-height: calc(100vh - 5rem);
    margin: 2.5rem auto;
    padding: 2.5rem;

    background: ${({ theme }) => theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`

export { LayoutContainer }
