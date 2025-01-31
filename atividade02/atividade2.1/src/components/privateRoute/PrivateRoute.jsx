import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthProvider";

const PrivateRoute = () => {
  const { token } = useAuthContext();
  const navigate = useNavigate();

  // Verifique se o token está disponível no contexto ou no localStorage
  const storedToken = localStorage.getItem("ACCESS_TOKEN");

  // Se não houver token, redireciona para a tela de login
  if (!token && !storedToken) {
    console.log("Token não encontrado. Redirecionando para o login.");
    navigate("/login");
    return <Navigate to="/login" />;
  }

  // Caso contrário, renderiza os filhos (as páginas protegidas)
  return children;
};

export default PrivateRoute;