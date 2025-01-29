import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Perfil = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Exibindo informações do usuário com ID: {id}</p>
      <Link to="/index">{'voltar'}</Link>
    </div>
  );
};

export default Perfil;
