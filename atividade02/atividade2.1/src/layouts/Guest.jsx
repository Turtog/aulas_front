import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { GuestStyled } from "./layouts.styled.js";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../components/Context/AuthProvider";

function Guest() {
  const { token } = useAuthContext();

  // Se o token existe, redireciona para a página principal (usuário já está logado)
  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <GuestStyled>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </GuestStyled>
  );
}

export default Guest;