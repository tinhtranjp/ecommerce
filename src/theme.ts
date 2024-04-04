import './theme-agumentation'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2',
          red_t: '#F94545',
          green_t: '#67B044',
          blue_t: '#0071DC',
          purple_t: '#7644E1',
          yellow_t: '#FFB700',
          dark_tdt: '#1A162E',
          lightBlue_t: '#77DAE6',
        },
        background: {
          default: '#F6F6F6',
        },
        bgCustom: {
          main: '#EEEEEE',
          secondary: 'FFF',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#90caf9',
        },
        background: {
          default: '#292E39',
          paper: '#171C28',
        },
        bgCustom: {
          main: '#171c28',
          secondary: '#292E39',
        },
      },
    },
  },
})
export default theme
