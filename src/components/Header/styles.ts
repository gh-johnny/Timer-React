import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${props => props.theme['gray-100']};

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            border-radius: 3px;

            &:hover {
                border-bottom: 3px solid ${({ theme }) => theme['green-300']}
            }

            &.active {
                 color: ${({ theme }) => theme['green-500']};
            }
        }
    }
`

export { HeaderContainer }
