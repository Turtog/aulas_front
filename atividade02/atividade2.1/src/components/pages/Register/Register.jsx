import React from 'react';
import { 
    RegisterContainer, 
    RegisterMain, 
    FormSection, 
    FormGroup, 
    Label, 
    Input, 
    Button, 
    LoginLink 
} from './Register.styles';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';

const Register = () => {
    return (
        <RegisterContainer>
            <Header />
            <RegisterMain>
                <h1>Registrar</h1>
                <FormSection>
                    <h2>Preencha o formulário abaixo</h2>
                    <form id="register-form" method="post" action="../../include/logica_pessoa.php">
                        <FormGroup>
                            <Label htmlFor="newName">Nome</Label>
                            <Input type="text" id="newName" name="nome" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="newCpf">CPF</Label>
                            <Input type="text" id="newCpf" name="cpf" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="newEmail">Email</Label>
                            <Input type="email" id="newEmail" name="email" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="newPassword">Senha</Label>
                            <Input type="password" id="newPassword" name="senha" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="newImage">Imagem</Label>
                            <Input type="file" id="newImage" name="imagem" />
                        </FormGroup>
                        <Button type="submit" name="cadastrar" value="Cadastrar">Registrar</Button>
                    </form>
                    <p>
                        Já tem uma conta? <LoginLink href="login">Faça login</LoginLink>
                    </p>
                </FormSection>
            </RegisterMain>
            <Footer />
        </RegisterContainer>
    );
};

export default Register;