import { Fab } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

const useStyle = makeStyles((theme: Theme) => createStyles({
    floatBtn: {
        position: 'absolute',
        right: '3rem',
        bottom: '3rem'
    }
}))
const ToggoleThemeBtn = () => {

    const classes = useStyle()
    const { theme, toggoleTheme } = useContext(ThemeContext)
    return (
        <Fab color='primary' variant='extended' className={classes.floatBtn} onClick={() => toggoleTheme(theme === 'primary' ? 'secondary' : 'primary')} >
            Toggole Theme
        </Fab>
    )
}

export default ToggoleThemeBtn