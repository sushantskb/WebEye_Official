import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import About from "./Components/About.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
ReactDOM.render(
  <>
    <RouterProvider router={router}/>
  </>,
  document.getElementById("root")
)

