import { ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '@/routes'
import DefaultLayout from '@/components/Layout/DefaultLayout'
import { Fragment } from 'react/jsx-runtime'

type RouteItem = {
  path: string
  component: () => JSX.Element
  layout?: React.ComponentType<any> | null
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route: RouteItem, index) => {
            const Page = route.component

            let Layout: React.FC<{ children?: ReactNode }> = DefaultLayout
            if (route.layout) {
              Layout = route.layout as React.FC<{ children?: ReactNode }>
            } else if (route.layout === null) {
              Layout = Fragment as React.FC<{ children?: ReactNode }>
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
