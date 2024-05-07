import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import Grammar from '@/pages/Grammar'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/grammar', component: Grammar },
  { path: '*', component: NotFound },
]

// const privateRoutes = []

export { publicRoutes }
