import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Index from '../components/pages/Index/Index';
import Perfil from '../components/pages/Perfil/Perfil';
import Cliente from '../components/pages/Cliente/Cliente';
import Login from '../components/pages/Login/Login';
import Logout from '../components/pages/Logout/Logout';
import Register from '../components/pages/Register/Register';
import Suporte from '../components/pages/Suporte/Suporte';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
import Default from '../layouts/Default';
import Guest from '../layouts/Guest';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Guest />}>
        <Route path='/' element={<Index />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/" element={<Default />}>
        <Route element={<PrivateRoute />}>
            <Route path="/" element={<Index />} />
            <Route path="cliente" element={<Cliente />} />
            <Route path="logout" element={<Logout />} />
            <Route path="perfil" element={<Perfil />} />
            <Route path="suporte" element={<Suporte />} />
            <Route path="register" element={<Register />} />
        </Route>
      </Route>
    </>
  )
);

export default router;