import {Link} from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import './Suporte.css';

const Suporte = () => {
    return (
        <div className="suporte">
        <Header />
        <main>
        <h1>Suporte</h1>
        <section className="form-section">
            <h2>Entre em Contato Conosco</h2>
            <form id="suporte-form">
            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" required="" />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required="" />
            </div>
            <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required=""
                defaultValue={""}
                />
            </div>
            <button type="submit">Enviar</button>
            <p id="form-alert" className="alert" />
            </form>
        </section>
        </main>
        <Footer />
        </div>
    );
};

export default Suporte;