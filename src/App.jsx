import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './screens/Login';
import Contacts from './screens/Contacts';
import ErrorPage from './screens/ErrorPage';

export const routes = [
  {
    path: "/",
    name: "Login",
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    name: "Contacts",
    element: <Contacts/>,
    
  },
]

const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />;


export default App;
