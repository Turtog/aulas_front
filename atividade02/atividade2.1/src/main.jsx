import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Index from './components/pages/Index/Index';
import Perfil from './components/pages/Perfil/Perfil';
import Cliente from './components/pages/Cliente/Cliente';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Suporte from './components/pages/Suporte/Suporte';
import './main.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
          <Outlet />
      }
    >
      <Route path="/" element={<Link to="/index">Home</Link>} />
      <Route path="index" element={<Index />} />
      <Route path="cliente" element={<Cliente />} />
      <Route path="perfil/:id" element={<Perfil />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="suporte" element={<Suporte />} />

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);