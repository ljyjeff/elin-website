import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import your components for each page
import MainPage from './routes/MainPage';
import ErrorPage from "./routes/ErrorPage";
import IllustrationPage from './routes/IllustrationPage';
import ComicPage from './routes/ComicPage';
import ChildrensBookPage from './routes/ChildrensBookPage';
import RealismPage from './routes/RealismPage';
import CharacterDesignPage from './routes/CharacterDesignPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/illustration",
            element: <IllustrationPage />,
        },
        {
            path: "/comic",
            element: <ComicPage />,
        },
        {
            path: "/childrensbook",
            element: <ChildrensBookPage />,
        },
        {
            path: "/realism",
            element: <RealismPage />,
        },
        {
            path: "/characterdesign",
            element: <CharacterDesignPage />,
        },
      ]
    },
  ]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
