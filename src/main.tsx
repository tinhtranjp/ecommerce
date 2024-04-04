import React from 'react'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
)
