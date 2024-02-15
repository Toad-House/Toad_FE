import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Main,
  MaterialMain,
  MaterialRequest,
  ProductsMain,
  ProductDetail,
} from './pages'

const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/material',
    element: <MaterialMain />,
  },
  {
    path: '/material/request',
    element: <MaterialRequest />,
  },
  {
    path: '/products',
    element: <ProductsMain />,
  },
  {
    path: '/product/detail',
    element: <ProductDetail />,
  },
])

function App() {
  return <RouterProvider router={ROUTER} />
}

export default App
