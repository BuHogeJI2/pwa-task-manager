import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EventsProvider } from './modules';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventsProvider>
      <RouterProvider router={router} />
    </EventsProvider>
  </React.StrictMode>
);
