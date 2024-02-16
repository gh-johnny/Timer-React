import { HeaderContainer } from "./styles"

import myLogo from '../../assets/logo-transparent-svg.svg'
import { Scroll, Timer } from "phosphor-react"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <HeaderContainer>
                <img
                    src={myLogo}
                    alt="Two green triangles on top of the other of which represents the app logo"
                    width={100}
                    height={100}
                />
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
