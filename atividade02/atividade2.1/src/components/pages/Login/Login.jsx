import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import { 
    PageContainer, 
    FormSection, 
    StyledForm, 
    StyledLabel, 
    StyledInput, 
    StyledButton, 
    RegisterText 
} from './Login.styles';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("authToken", "user123"); // Simula o login
        navigate("/index"); // Redireciona para a página principal após login
    };

    return (
        <PageContainer>
            <Header />
            <main>
                <FormSection>
                    <article>
                        <h2>LOGIN</h2>
                        <StyledForm action="../../include/logica_pessoa.php" method="post">
                            <StyledLabel htmlFor="email">Email:</StyledLabel>
                            <StyledInput type="email" id="email" name="email" required />
                            
                            <StyledLabel htmlFor="senha">Senha:</StyledLabel>
                            <StyledInput type="password" id="senha" name="senha" required />
                            
                            <StyledButton type="button" onClick={handleLogin}>Entrar</StyledButton>
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

export default Login;