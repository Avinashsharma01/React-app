import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./nav/Home.jsx"
import About from "./nav/About.jsx"
import Contact from "./nav/Contact.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Avinash from './nav/Avinash.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App> <Home/> </App> ,
  },
  {
    path: "/about",
    element: <App> <About/> </App> ,
  },
  {
    path: "/contact",
    element: <App> <Contact/> </App> ,
  },
  {
    path: "/avinash",
    element: <App> <Avinash/> </App> ,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
