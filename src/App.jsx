import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './screens/Login';
import Contacts from './screens/Contacts';
import ErrorPage from './screens/ErrorPage';
import Home from './screens/Home';
import News from './screens/News';
import Guarantee from './screens/Guarantee';
import AboutUs from './screens/AboutUs';
import Goods from './screens/Goods';

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home/>,
  },
  {
    path: "/login",
    name: "Login",
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    name: "Contacts",
    element: <Contacts/>,
  },
  {
    path: "/news",
    name: "News",
    element: <News />,
  },
  {
    path: "/guarantee",
    name: "Guarantee",
    element: <Guarantee />,
  },
  {
    path: "/about-us",
    name: "About us",
    element: <AboutUs />,
  },
  {
    path: "/goods",
    name: "Goods",
    element: <Goods />,
  },
]

const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />;


export default App;
