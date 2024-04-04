import Home from '@/pages/Home/home'
import Product from '@/pages/Product/product'
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/product', component: Product, layout: null },
]

// const privateRoutes = []

export { publicRoutes }
