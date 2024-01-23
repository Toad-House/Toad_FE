import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main, MaterialSourcing, UpcycledProducts } from "./pages";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/material-sourcing",
    element: <MaterialSourcing />,
  },
  {
    path: "/upcycled-products",
    element: <UpcycledProducts />,
  }

]);

function App() {
  return <RouterProvider router={ROUTER} />;

}

export default App;
