import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthProvider.jsx";
import { useRef } from "react";
import axiosClient from "../../../utils/axios-client.js";
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import { 
    PageContainer, 
    FormSection, 
    StyledForm, 
    StyledButton, 
    RegisterText 
} from './Login.styles';

export default function Login() {
    const { setToken, setUser } = useAuthContext();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
  
    const onSubmit = async (event) => {
        event.preventDefault();
        const payload = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        console.log({ payload });
        try {
          const response = 
            await axiosClient.post("/login", payload);
          const { data } = response;
          alert("Usuário logado");
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem(
            'CURRENT_USER',
            JSON.stringify(data.user)
          );
          navigate("/dashboard");
        } catch (error) {
          console.error(error.response.data.message);
        }
    };

    return (
        <PageContainer>
            <Header />
            <main>
                <FormSection>
                    <article>
                        <h2>LOGIN</h2>
                        <StyledForm action="" method="get" onSubmit={onSubmit}>
                            <input ref={emailRef} type="text" placeholder="Email" name="email" />
                            <input ref={passwordRef} type="password" placeholder="Password" />
                            
                            <StyledButton type="button">Entrar</StyledButton>
                        </StyledForm>
                        <RegisterText>
                            Não tem uma conta? <Link to="/register">Registre-se aqui</Link>
                        </RegisterText>
                    </article>
                </FormSection>
            </main>
            <Footer />
        </PageContainer>
    );
};