import React from 'react';
import { createBrowserRouter } from "react-router-dom"; // Ensure the correct import for v6/v7
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Components/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/Readlist';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Use 'element' for JSX or 'Component' for the class/function reference
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // Added 'element' syntax for consistency
        element: <Home />,
        loader: () => fetch('/booksData.json'), // Ensure the slash is there if it's in public folder
      },
      {
        path: "about", // Lowercase is standard for URLs
        element: <About />,
      },
      {
        path: "readList",
        // CRITICAL FIX: You need the data here to filter the read books!
        loader: () => fetch('/booksData.json'), 
        element: <ReadList />,
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch('/booksData.json'),
        element: <BookDetails />,
      }
    ]
  },
]);