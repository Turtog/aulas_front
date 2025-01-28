import Header from '../../Header';
import Footer from '../../Footer';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
        <Header />
        <main>
        <section className="form-section">
            <article>
            <h2>Registrar</h2>
            <form
                action="../../include/logica_pessoa.php"
                method="post"
                id="registerForm"
                encType="multipart/form-data"
            >
                <label htmlFor="newName">Nome:</label>
                <input type="text" id="newName" name="nome" required="" />
                <label htmlFor="newCpf">CPF:</label>
                <input type="text" id="newCpf" name="cpf" required="" />
                <label htmlFor="newEmail">Email:</label>
                <input type="email" id="newEmail" name="email" required="" />
                <label htmlFor="newPassword">Senha:</label>
                <input type="password" id="newPassword" name="senha" required="" />
                <label htmlFor="newImage">Imagem:</label>
                <input type="file" id="newImage" name="imagem" />
                <br />
                <button type="submit" name="cadastrar" value="Cadastrar">
                Registrar
                </button>
            </form>
            <p>
                Já tem uma conta? <a href="login.html">Faça login</a>
            </p>
            </article>
        </section>
        </main>
        <Footer />
        </div>
    );
};

export default Register;