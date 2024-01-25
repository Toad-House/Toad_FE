import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main, Material, ProductsMain,ProductDetail } from './pages'

const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/material',
    element: <Material />,
  },
  {
    path: '/products',
    element: <ProductsMain />,
  },
  {
    path: '/product/detail',
    element: <ProductDetail />,
  }
])

function App() {
  return <RouterProvider router={ROUTER} />
}

export default App
