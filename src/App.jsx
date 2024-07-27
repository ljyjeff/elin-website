import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

// Import your components for each page
import ErrorPage from "./routes/ErrorPage";
import IllustrationPage from './routes/illustration/IllustrationPage';
import GrwmPage from './routes/game/GrwmPage';
import ChildrensBookPage from './routes/childrensbook/ChildrensBookPage';
import navLogo from 'assets/header-home.png';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/illustration" />,
      },
      {
        path: "/illustration",
        element: <IllustrationPage />,
      },
      {
        path: "/games/:game",
        element: <GrwmPage />,
      },
      {
        path: "/childrensbook/:book",
        element: <ChildrensBookPage />,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

function NavbarWrapper() {
  return (
    <div className="app">
      <div className="logo">
        <img src={navLogo} alt="" />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
};

export default App;
