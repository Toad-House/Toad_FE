import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Main,
  MaterialMain,
  MaterialDetail,
  MaterialRequest,
  ProductsMain,
  ProductDetail,
  ProductUpload,
  PointPage,
  ProductBuy,
} from './pages'

const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/product/buy',
    element: <ProductBuy />,
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
    path: '/material/detail',
    element: <MaterialDetail />,
  },
  {
    path: '/products',
    element: <ProductsMain />,
  },
  {
    path: '/product/detail',
    element: <ProductDetail />,
  },
  {
    path: '/product/upload',
    element: <ProductUpload />,
  },
  {
    path: '/points',
    element: <PointPage />,
  },
])

function App() {
  return <RouterProvider router={ROUTER} />
}

export default App
