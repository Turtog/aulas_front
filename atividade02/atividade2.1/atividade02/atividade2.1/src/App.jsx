import './App.css';
import FilterableServicoTable from "./components/FilterableServicoTable/FilterableServicoTable";

const SERVICOS = [
  { category: 'Reformas', servicoName: 'Encanador' },
  { category: 'Reformas', servicoName: 'Eletricista' },
  { category: 'Domésticos', servicoName: 'Babá' },
  { category: 'Domésticos', servicoName: 'Diarista' },
  { category: 'Domésticos', servicoName: 'Limpeza de Piscina' },
  { category: 'Assistencias', servicoName: 'Ar Condicionado' },
];
//comentario
export default function App() {
  return <FilterableServicoTable servicos={SERVICOS} />;
}