import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type TThemeType = typeof defaultTheme

declare module 'styled-components' {
   export interface DefaultTheme extends TThemeType {}
}



