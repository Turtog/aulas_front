import {Link} from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
        <Header />
        <main>
        <section className="form-section">
            <article>
            <h2>LOGIN</h2>
            <form
                action="../../include/logica_pessoa.php"
                method="post"
                id="loginForm"
            >
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required="" />
                <button type="submit" name="entrar" value="Entrar">
                Entrar
                </button>
            </form>
            <p>
                Não tem uma conta?{" "}
                <Link to="/register" className="register-link">Registre-se aqui</Link>
            </p>
            </article>
        </section>
        </main>
        <Footer />
        </div>
    );
};

export default Login;