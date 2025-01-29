import './App.css';
import FilterableServicoTable from "./components/FilterableServicoTable/FilterableServicoTable";
import { ServicoProvider } from "./components/Context/ServicoContext";

const SERVICOS = [
  { category: 'Reformas', servicoName: 'Encanador' },
  { category: 'Reformas', servicoName: 'Eletricista' },
  { category: 'Domésticos', servicoName: 'Babá' },
  { category: 'Domésticos', servicoName: 'Diarista' },
  { category: 'Domésticos', servicoName: 'Limpeza de Piscina' },
  { category: 'Assistencias', servicoName: 'Ar Condicionado' },
];

export default function App() {
  return (
    <ServicoProvider>
      <FilterableServicoTable />
    </ServicoProvider>
  );
}