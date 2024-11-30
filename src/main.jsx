import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import PrivatedContext from './components/PrivatedContext.jsx';
import User from './components/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path: "/users",
        element:<User></User>,
        loader: () => fetch('http://localhost:5000/users')
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <PrivatedContext>
  <RouterProvider router={router} />
  </PrivatedContext>
  </StrictMode>,
)
