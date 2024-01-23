import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main, Material, Products } from './pages'

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
    element: <Products />,
  },
])

function App() {
  return <RouterProvider router={ROUTER} />
}

export default App
