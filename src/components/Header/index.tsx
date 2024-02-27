import { HeaderContainer } from "./styles"

import myLogo from "../../assets/logo/logo-johnny.svg"
import { Scroll, Timer } from "phosphor-react"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <HeaderContainer>
                <img
                    src={myLogo}
                    alt='Two green squares almost on top of each other, but one is slightly more to the right and bottom and in the very middle there is a "J" which is also green. Right below the name "Johnny" in all caps but white the bottom most green square overflows th very top of the "H" and "N" of the name since it is right below.'
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
