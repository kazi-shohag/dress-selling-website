  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import All_Category from './components/All_Category.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/category",
        element:<h6>category is nor availabe naw.</h6>
      },
    
      {
        path:"/contacts",
        element:<h6>the contacts number is 0130-6330565</h6>
      },
       {
        path:"/all-category",
        element:<All_Category></All_Category>
      }
    ]
  },
]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
    