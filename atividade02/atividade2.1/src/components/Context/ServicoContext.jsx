import { createContext, useContext } from "react";

const ServicoContext = createContext();

export const ServicoProvider = ({ children }) => {
  const SERVICOS = [
    { category: "Reformas", servicoName: "Encanador" },
    { category: "Reformas", servicoName: "Eletricista" },
    { category: "Domésticos", servicoName: "Babá" },
    { category: "Domésticos", servicoName: "Diarista" },
    { category: "Domésticos", servicoName: "Limpeza de Piscina" },
    { category: "Assistencias", servicoName: "Ar Condicionado" },
  ];

  return (
    <ServicoContext.Provider value={SERVICOS}>
      {children}
    </ServicoContext.Provider>
  );
};

export const useServicos = () => {
  return useContext(ServicoContext);
};