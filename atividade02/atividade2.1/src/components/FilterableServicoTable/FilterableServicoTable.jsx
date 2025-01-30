import { useServicos } from "../Context/ServicoProvider";

export default function FilterableServicoTable() {
  const servicos = useServicos();

  return (
    <div>
      <h2>Lista de Serviços</h2>
      <ul>
        {servicos.map((servico, index) => (
          <li key={index}>
            {servico.category} - {servico.servicoName}
          </li>
        ))}
      </ul>
    </div>
  );
}
