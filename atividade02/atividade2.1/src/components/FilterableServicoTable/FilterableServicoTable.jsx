import { useServicos } from "../Context/ServicoContext";

export default function FilterableServicoTable() {
  const servicos = useServicos(); // Obtém os serviços do contexto

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
