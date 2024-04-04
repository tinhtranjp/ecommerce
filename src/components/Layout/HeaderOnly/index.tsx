import { ReactNode } from 'react'
import Header from '@/components/Layout/DefaultLayout/Header'
export default function HeaderOnly({ children }: { children?: ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
