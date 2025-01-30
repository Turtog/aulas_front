import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/Context/AuthProvider";

export default function Default() {
  const { token, user } = useAuthContext();
  const navigate = useNavigate();
  if (!token) return <Navigate to="/login" />;

  const onLogout = () => {
    navigate("/logout");
  };

  return (
    <DefaultStyled>
        <Header />
        <main>
          <aside>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/users">Users</Link>
            <Link to="/cadastro">Novo User</Link>
          </aside>
          <section>
            <Outlet />
          </section>
        </main>
        <Footer />
    </DefaultStyled>
  );
}