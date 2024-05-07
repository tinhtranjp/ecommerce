import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box, Stack } from '@mui/material'

export default function DefaultLayout({ children }: { children?: ReactNode }) {
  return (
    <Stack minHeight='100vh'>
      <Header />
      <Box component='main' flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
