import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import { 
    SuporteContainer,
    Main, 
    FormSection, 
    FormGroup, 
    Label, 
    Input, 
    Textarea, 
    Button, 
    Alert,
    MediaQueryFormSection 
} from './Suporte.styles';

const Suporte = () => {
    return (
        <SuporteContainer>
        <Header />
            <Main>
            <FormSection>
                    <h2>Entre em Contato Conosco</h2>
                    <form id="suporte-form">
                        <FormGroup>
                            <Label htmlFor="nome">Nome</Label>
                            <Input type="text" id="nome" name="nome" required="" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">E-mail</Label>
                            <Input type="email" id="email" name="email" required="" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="mensagem">Mensagem</Label>
                            <Textarea id="mensagem" name="mensagem" rows={4} required="" />
                        </FormGroup>
                        <Button type="submit">Enviar</Button>
                        <Alert id="form-alert" />
                    </form>
                </FormSection>
            </Main>
        <Footer />
        </SuporteContainer>
    );
};

export default Suporte;