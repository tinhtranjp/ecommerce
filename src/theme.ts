import './theme-agumentation'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {},
    },
    dark: {
      palette: {},
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        // maxWidthSm: {
        //   maxWidth: '680px',
        //   '@media (min-width: 600px)': {
        //     maxWidth: '680px',
        //   },
        // },
      },
      defaultProps: {
        // maxWidth: 'md',
      },
      variants: [],
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: '#666',
          '&:hover': {
            color: '#0070f3',
          },
        },
      },
    },
  },
})
export default theme
