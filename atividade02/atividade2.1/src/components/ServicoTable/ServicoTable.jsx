import { ServicoCategoryRow } from "../ServicoCategoryRow/ServicoCategoryRow";
import { ServicoRow } from "../ServicoRow/ServicoRow";

export default function ServicoTable({ servicos }) {
    const rows = [];
    let lastCategory = null;

    servicos.forEach((servico) => {
        if (servico.category !== lastCategory) {
            rows.push(
                <ServicoCategoryRow
                    category={servico.category}
                    key={servico.category}
                />
            );
        }
        rows.push(<ServicoRow servico={servico} key={servico.name} />);
        lastCategory = servico.category;
    });

    const rows_reformas = servicos.map((servico) => {
        if (servico.category === 'Reformas')
            return (<ServicoRow servico={servico} key={servico.name} />)
    });

    const rows_domesticos = servicos.map((servico) => {
        if (servico.category === 'Domésticos')
            return (<ServicoRow servico={servico} key={servico.name} />)
    });

    const rows_assistencias = servicos.map((servico) => {
        if (servico.category === 'Assistencia')
            return (<ServicoRow servico={servico} key={servico.name} />)
    });

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Categorias</th>
                    </tr>
                </thead>
                <tbody>
                    <ServicoCategoryRow
                        category={'Reformas'}
                        key={'reformas'}
                    />
                    {rows_reformas}
                    <ServicoCategoryRow
                        category={'Domesticos'}
                        key={'domesticos'}
                    />
                    {rows_domesticos}
                    <ServicoCategoryRow
                        category={'Assistencias'}
                        key={'assistencias'}
                    />
                    {rows_domesticos}
                </tbody>
            </table>
        </>
    );
}