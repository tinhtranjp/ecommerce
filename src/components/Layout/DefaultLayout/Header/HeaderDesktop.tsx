import '@/assets/css/main.css'
import { Box, Button, InputBase, Link, Stack, alpha, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Nav_Link } from './routes'
import logo from '@/assets/img/logo.png'
import { useLocation } from 'react-router-dom'

export default function HeaderDesktop() {
  const location = useLocation()

  return (
    <Box display={{ xs: 'none', lg: 'block' }}>
      <Box component='header' sx={{ height: '64px' }} className='headerBorderBottom'>
        <Box
          component='nav'
          sx={{
            display: 'flex',
            fontSize: '18px',
            maxWidth: '1400px',
            mx: 'auto',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Link component={NavLink} to='/'>
            <img src={logo} alt='lo go' />
          </Link>
          <Stack direction='row' spacing={6}>
            {Nav_Link &&
              Nav_Link.map((navItem) => (
                <Link
                  key={navItem.link}
                  component={NavLink}
                  to={navItem.link}
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: location.pathname === navItem.link ? '#0070f3' : '#666',
                    '&:hover': {
                      color: location.pathname === navItem.link ? '#0070f3' : '#333',
                    },
                  }}
                >
                  {navItem.name}
                </Link>
              ))}
          </Stack>
          <Stack direction='row' spacing={3} ml={12}>
            <Button
              variant='contained'
              sx={{
                color: 'white',
                backgroundColor: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                },
              }}
            >
              đăng ký
            </Button>
            <Button
              variant='contained'
              sx={{
                color: 'white',
                backgroundColor: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                },
              }}
            >
              đăng nhập
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
