import ServicoTable from "../ServicoTable/ServicoTable";
import SearchBar from "../SearchBar/SearchBar";


export default function FilterableServicoTable({ servicos }) {
    return (
      <div>
        <SearchBar />
        <ServicoTable servicos={servicos} />
      </div>
    );
  }