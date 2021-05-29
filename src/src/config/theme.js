import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import colors from './colors.json'

const theme = createMuiTheme({
  colors: {...colors}
})

export default theme