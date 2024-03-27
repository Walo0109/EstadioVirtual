import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContactPage } from './pages/ContactPage.jsx';
import { HomePage } from './pages/HomePage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
);
