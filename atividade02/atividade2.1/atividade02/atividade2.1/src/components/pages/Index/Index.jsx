import { Link } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import App from '../../../App';
import './Index.css';

const Index = () => {
    return (
        <div className="index">
        <Header />
        <main className='index'>
        <App />
        <section className="main-options">
            <article className="service-option">
            <h2>Cliente</h2>
            <p>Precisa de um serviço? Faça seu pedido agora mesmo.</p>
            <Link to="/cliente" className="btn">{'Pedir Serviço'}</Link>
            </article>
        </section>
        <br />
        <br />
        <h1>Serviços mais procurados</h1>
        <div className="items">
            <div className="item active">
            <img src="src/components/images/encanador.jpg" alt="Encanador" />
            </div>
            <div className="item next">
            <img src="src/components/images/faxineira.jpg" alt="Faxineira" />
            </div>
            <div className="item">
            <img src="src/components/images/jardineiro.jpg" alt="Jardineiro" />
            </div>
            <div className="item">
            <img src="src/components/images/pedreiro.jpg" alt="Pedreiro" />
            </div>
            <div className="item prev">
            <img src="src/components/images/pintor.jpg" alt="Pintor" />
            </div>
            <div className="button-container">
            <div className="button">
                <i className="fas fa-angle-left" />
            </div>
            <div className="button">
                <i className="fas fa-angle-right" />
            </div>
            </div>
        </div>
        </main>
        <Footer />
        </div>
    );
};

export default Index;