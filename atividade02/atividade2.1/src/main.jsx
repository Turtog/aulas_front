import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import App from './App';
import Index from './components/pages/Index/Index';
import Perfil from './components/pages/Perfil/Perfil';
import Cliente from './components/pages/Cliente/Cliente';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Suporte from './components/pages/Suporte/Suporte';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Default from './layouts/Default';
import Guest from './layouts/Guest';

export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Guest />}>
      <Route path="index" element={<Index />} />
      <Route path="cliente" element={<Cliente />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      </Route>

      <Route path="/" element={<Default />}>
      <Route path="suporte" element={<Suporte />} />
      <Route element={<PrivateRoute />}>
      <Route path="perfil/:id" element={<Perfil />} />
      <Route path="app" element={<App />} />
      </Route>
      </Route>
      
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);
