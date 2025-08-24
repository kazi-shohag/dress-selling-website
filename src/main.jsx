  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import Home from './components/Home.jsx'
  import './index.css'
  import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home> ,
  },
]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
    