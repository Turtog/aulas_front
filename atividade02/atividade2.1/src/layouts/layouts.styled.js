import styled from "styled-components";

export const GuestStyled = styled.div`
  main {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0.75rem;
    box-sizing: border-box;
  }

  @media (min-width: 640px) {
    main {
      padding: 2.5rem;
    }
  }
`;

export const DefaultStyled = styled.div`
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: 80px;
    padding: 2rem 3rem;
    background-color: var(--main-bg-color);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    width: 100%;
    padding: 0rem;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    min-height: 50vh;
  }

  section {
    width: 100%;
    align-items: center;
    padding: 2rem;
    /* border: 2px solid blue; */
  }

  aside {
    /* width: 240px; */
    width: 100%;
    background-color: var(--dark-green);
    padding: 1rem;
    /* border: 2px solid green; */
    border-radius: 0 0 20% 20%/ 0 0 5% 5%;
  }

  aside > a {
    display: block;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    color: var(--main-bg-color);
    text-decoration: none;
  }

  aside > a:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 450px) {
    & main {
      flex-direction: row;
    }

    & aside {
      width: 240px;
      border-radius: 0 0 20% 0/ 0 0 5% 0;
    }
  }
`;

export const LogoutIcon = styled.button`
  background-color: #f44336; /* Cor vermelha */
  color: white; /* Texto branco */
  font-size: 16px; /* Tamanho da fonte */
  padding: 10px 20px; /* Espaçamento interno */
  border: none; /* Remover borda */
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer; /* Cursor de ponteiro */
  transition: background-color 0.3s ease; /* Efeito de transição ao passar o mouse */

  &:hover {
    background-color: #d32f2f; /* Cor de fundo ao passar o mouse */
  }

  &:focus {
    outline: none; /* Remover outline ao clicar */
  }

  &:active {
    background-color: #c62828; /* Cor de fundo ao pressionar */
  }
`;