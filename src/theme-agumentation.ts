import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    [key: string]: any
  }
  interface PaletteOptions {
    [key: string]: any
  }

  interface PaletteColorOptions {
    [key: string]: any
  }

  interface ColorSystemOptions {
    [key: string]: any
  }
}
