import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ProfileContainer,
  ProfileImage,
  Label,
  Input,
  Button,
  DeleteButton,
  BackLink,
  Main
} from './Perfil.styles';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';

const Perfil = () => {
  const { id } = useParams();

  return (
    <ProfileContainer>
    <Header />
      <Main>
      <ProfileImage src="https://via.placeholder.com/150" alt="Imagem do Perfil" />
      <p>Exibindo informações do usuário com ID: {id}</p>

      <Label>Nome:</Label>
      <Input type="text" value="Nome do Usuário" disabled />

      <Label>Email:</Label>
      <Input type="email" value="email@dominio.com" disabled />

      <Button>Editar Perfil</Button>

      <DeleteButton>Excluir Conta</DeleteButton>

      <Link to="/index">
        <BackLink>Voltar</BackLink>
      </Link>
      </Main>
    <Footer />
    </ProfileContainer>
  );
};

export default Perfil;