import { createContext, useContext , useState} from "react";
import axiosClient from "../../utils/axios-client";


export const ServicoContext = createContext({
  data: null,
  loadProdutos: () => {},
  setData: () => {},
  editProduto: () => {},
  deleteProduto: () => {},
});

export const ServicoProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const loadServicos = async (id = null) => {
    const url = id ? `/servicos/${id}` : `/servicos`;
    try {
      const {data} = await axiosClient.get(url);
      const _data = data?.data;
      console.log({_data});

      if (!_data) 
        throw new Error("Erro ao carregar serviços");

      Array.isArray(_data) && _data.reverse();
      setData(_data);
    } catch (error) {
      console.log(error);
    }
  };

  const editServico = (id, data) => {
    return true;
  };

  const deleteServico = (id) => {
    return true;
  };

  return (
    <ServicoContext.Provider
      value={{
        data,
        loadServicos,
        setData,
        editServico,
        deleteServico,
      }}
    >
      {children}
    </ServicoContext.Provider>
  );
};
