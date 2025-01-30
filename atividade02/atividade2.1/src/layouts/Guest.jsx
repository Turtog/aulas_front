import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { GuestStyled } from "./layouts.styled.js";

function Guest() {
  return (
    <GuestStyled>
      <Header />
      <main>
          <Outlet />
      </main>
      <Footer/>
    </GuestStyled>
  );
}

export default Guest;