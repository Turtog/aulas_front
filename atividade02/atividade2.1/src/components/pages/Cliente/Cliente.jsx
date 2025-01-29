import { 
    ClienteContainer, 
    ClienteMain,
    FormSection,
    FormGroup,
    Label,
    Input,
    Textarea,
    Button,
    Alert     
} from './Cliente.styles';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';

const Cliente = () => {
    return (
        <ClienteContainer>
            <Header />
            <ClienteMain>
                <h1>Pedir Serviço</h1>
                <FormSection>
                    <h2>Preencha o formulário abaixo</h2>
                    <form id="pedido-form" method="post" action="../../include/logica_pedido.php">
                        <FormGroup>
                            <Label htmlFor="titulo">Título</Label>
                            <Input type="text" id="titulo" name="titulo" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="descricao">Descrição</Label>
                            <Textarea id="descricao" name="descricao" rows="4" required></Textarea>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="endereco">Endereço</Label>
                            <Input type="text" id="endereco" name="endereco" required />
                        </FormGroup>
                        <Button type="submit" name="cadastrar" value="cadastrar">Enviar Pedido</Button>
                        <Alert id="form-alert"></Alert>
                    </form>
                </FormSection>
            </ClienteMain>
            <Footer />
        </ClienteContainer>
    );
};

export default Cliente;