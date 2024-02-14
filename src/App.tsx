import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <Router />
                <GlobalStyle />
            </ThemeProvider>
        </BrowserRouter>
    )
}

export { App }
