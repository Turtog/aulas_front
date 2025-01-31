import { Navigate } from "react-router-dom";
import { useAuthContext } from "../components/Context/AuthProvider";
import { LogoutIcon } from "./layouts.styled";

export default function Default() {
  const { token } = useAuthContext();
  const navigate = useNavigate();

  if (!token) return <Navigate to="/login" />;

  const onLogout = () => {
    navigate("/logout");
  };

  return (
    <DefaultStyled>
        <LogoutIcon>
          <button onClick={onLogout}>Logout</button>
        </LogoutIcon>
        <main>
          <section>
            <Outlet />
          </section>
        </main>
    </DefaultStyled>
  );
}