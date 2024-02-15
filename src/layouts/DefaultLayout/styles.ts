import styled from 'styled-components'

const LayoutContainer = styled.div`

    max-width: 74rem;
    height: calc(97vh - 9rem);
    margin: 5rem auto;
    padding: 2.5rem;

    background: ${({ theme }) => theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`

export { LayoutContainer }
