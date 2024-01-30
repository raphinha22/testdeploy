import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
import Home from "./Pages/Home"
import "../src/App.css";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: ":id",
        element: <ProductDetails/>,
      },
      {
        path: "service",
        element: <h2>Service Page</h2>
      },
      {
        path: "accesseries",
        element: <h2>Accesseries Page</h2>
      },
      {
        path: "about",
        element: <h2>About Page</h2>
      },
    ]
  },
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App