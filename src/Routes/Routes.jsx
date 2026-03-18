import React from 'react';

import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Components/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import Readlist from '../Pages/ReadList/Readlist';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('booksData.json'),
        path: "/",
        Component: Home
      },
      {
        path: "/About",
        Component: About
      },
      {
        path: "/readList",
        Component: Readlist
      },
      {
         path: "/bookDetails/:id",
         loader: () => fetch('booksData.json'),
        Component: BookDetails
      }
    ]
  },

]);