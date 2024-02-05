import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
