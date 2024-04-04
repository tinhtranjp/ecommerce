import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function DefaultLayout({ children }: { children?: ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
