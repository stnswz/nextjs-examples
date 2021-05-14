import { createMuiTheme } from '@material-ui/core'
import { deepPurple, cyan } from '@material-ui/core/colors'

const muiTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: cyan
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

export default muiTheme