import { HeaderContainer } from "./styles"

import logo from '../../assets/logo.svg'
import { Scroll, Timer } from "phosphor-react"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <HeaderContainer>
                <img src={logo} alt="Two green triangles on top of the other of which represents the app logo" />
                <nav>
                    <NavLink
                        to="/"
                        title="Timer"
                    >
                        <Timer size={24} />
                    </NavLink>
                    <NavLink
                        to="/history"
                        title="History"
                    >
                        <Scroll size={24} />
                    </NavLink>
                </nav>
            </HeaderContainer>
        </>
    )
}

export { Header }
