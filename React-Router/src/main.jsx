import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './NavPage/Home';
import About from './NavPage/About';
import App from './App';
import Services from './NavPage/Services';
import Contact from './NavPage/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Home/></App> ,
  },
  {
    path: "/about",
    element: <App><About/></App> ,
  },
  {
    path: "/services",
    element: <App><Services/></App> ,
  },
  {
    path: "/contact",
    element: <App><Contact/></App> ,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
