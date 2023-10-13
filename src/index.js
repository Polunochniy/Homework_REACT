import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Services from './components/Services';
import Projects from './components/Projects';
import Partners from './components/Partners';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/aboutus",
    element: <About />,
  },

  {
    path: "/services",
    element: <Services />,
  },

  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/partners",
    element: <Partners />,
  },

  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
