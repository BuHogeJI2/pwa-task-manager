import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EventsProvider, Layout } from './modules';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <h1>Home page</h1>
      </Layout>
    ),
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
