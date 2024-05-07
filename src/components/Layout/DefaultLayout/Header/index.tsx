// import '@/assets/css/main.css'
// import { Box, Button, Link, Stack } from '@mui/material'
// import { NavLink } from 'react-router-dom'
// import logo from '@/assets/img/logo.png'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
export default function Header() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  )
  // const navLink = [
  //   { name: 'Kiến thức cơ bản', link: '/ktcb' },
  //   { name: 'N3', link: '/n3' },
  //   { name: 'N2', link: '/n2' },
  //   { name: 'N1', link: '/n1' },
  //   { name: 'Kanji', link: '/kanji' },
  //   { name: 'Kính ngữ', link: '/kn' },
  // ]
  // return (
  //   <Box component='header' sx={{ height: '64px' }} className='headerBorderBottom'>
  //     <Box
  //       component='nav'
  //       sx={{
  //         display: 'flex',
  //         fontSize: '18px',
  //         maxWidth: '1200px',
  //         mx: 'auto',
  //         alignItems: 'center',
  //         justifyContent: 'space-between',
  //         height: '100%',
  //       }}
  //     >
  //       <Link component={NavLink} to='/' underline='none'>
  //         <img src={logo} alt='lo go' />
  //       </Link>
  //       <Stack direction='row' spacing={6}>
  //         {navLink &&
  //           navLink.map((navItem, index) => (
  //             <Link
  //               key={index}
  //               component={NavLink}
  //               to={navItem.link}
  //               underline='none'
  //               sx={{
  //                 fontSize: '18px',
  //                 color: '#666',
  //                 fontWeight: 'bold',
  //                 '&[aria-current="page"]': {
  //                   color: '#0070f3',
  //                   '&:hover': {
  //                     color: '#0070f3',
  //                   },
  //                 },
  //                 '&:hover': {
  //                   color: '#333',
  //                 },
  //               }}
  //             >
  //               {navItem.name}
  //             </Link>
  //           ))}
  //       </Stack>
  //       <Stack direction='row' spacing={3} ml={12}>
  //         <Button
  //           variant='contained'
  //           sx={{
  //             color: 'white',
  //             backgroundColor: 'black',
  //             '&:hover': {
  //               backgroundColor: 'black',
  //             },
  //           }}
  //         >
  //           đăng ký
  //         </Button>
  //         <Button
  //           variant='contained'
  //           sx={{
  //             color: 'white',
  //             backgroundColor: 'black',
  //             '&:hover': {
  //               backgroundColor: 'black',
  //             },
  //           }}
  //         >
  //           đăng nhập
  //         </Button>
  //       </Stack>
  //     </Box>
  //   </Box>
  // )
}
