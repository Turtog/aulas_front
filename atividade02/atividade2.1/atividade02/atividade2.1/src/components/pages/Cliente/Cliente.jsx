import './Cliente.css';
import Header from '../../Header';
import Footer from '../../Footer';

const Cliente = () => {
    return (
        <div className="cliente">
        <Header />
        <main className='cliente'>
            <h1>Pedir Serviço</h1>
            <section className="form-section">
                <h2>Preencha o formulário abaixo</h2>
                <form id="pedido-form" method="post" action="../../include/logica_pedido.php">
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" id="titulo" name="titulo" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea id="descricao" name="descricao" rows="4" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="endereco">Endereço</label>
                        <input type="text" id="endereco" name="endereco" required/>
                    </div>
                    <button type="submit" name="cadastrar" value="cadastrar">Enviar Pedido</button>
                    <p id="form-alert" className="alert"></p>
                </form>
            </section>
             
            {/* <section className="pedidos-section">    
            </section> */}
        </main>
        <Footer />
        </div>
    );
  };
  
  export default Cliente;