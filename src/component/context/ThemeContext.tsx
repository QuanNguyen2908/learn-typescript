import { PropTypes } from "@material-ui/core";
import { createContext, ReactNode, useState } from "react";


interface ThemeCOntextProviderProps {
    children: ReactNode
}

interface ThemeContextDefault {
    theme: PropTypes.Color
    toggoleTheme: (theme: PropTypes.Color) => void
}
const themeContextDefaultData = {
    theme: 'secondary' as PropTypes.Color,
    toggoleTheme: () => null
}
export const ThemeContext = createContext<ThemeContextDefault>(themeContextDefaultData)

const ThemeContextProvider = ({ children }: ThemeCOntextProviderProps) => {

    const [theme, setTheme] = useState<PropTypes.Color>(themeContextDefaultData.theme)

    const toggoleTheme = (theme: PropTypes.Color) => setTheme(theme)
    const themeContextDynamicData = {
        theme,
        toggoleTheme
    }
    return <ThemeContext.Provider value={themeContextDynamicData}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider