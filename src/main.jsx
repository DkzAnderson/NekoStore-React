import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Home } from './components/Home/Home.jsx';
import { Details } from './components/Details/Details.jsx';
import { SearchResult } from './components/SearchResult/SearchResult.jsx';
import { Media } from './components/Media/Media.jsx';



const router = createHashRouter ([
  {
    path: "/",
    element: <Navigate to={"/home"}/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/details/:id",
    element: <Details/>,
  },
  {
    path: "/search-result/:id",
    element: <SearchResult/>,
  },
  {
    path: "/media/:id/:season/:episode",
    element: <Media/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
