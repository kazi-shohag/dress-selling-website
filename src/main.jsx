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
import Add_Dress from './components/Add_Dress.jsx';
import Update_Dress from './components/Update_Dress.jsx';

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
       },
       {
        path:"/update-dress",
        element:<Update_Dress></Update_Dress>
      }
    ]
  },
  {
        path:"/add-dress",
        element:<Add_Dress></Add_Dress>
      },
]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
    