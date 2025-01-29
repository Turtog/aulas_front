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

    // console.log(rows)
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


    // const domesticos = servicos.filter((servico) => servico.category === 'Domésticos');
    // console.log('filter:', domesticos)

    // const reformas = servicos.filter((servico) => servico.category === 'Reformas');
    // console.log('filter:', reformas)

    // const assistencias = servicos.filter((servico) => servico.category === 'Assistencias');
    // console.log('filter:', assistencias)

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
            {/* <p></p>
            <h3>Tabela Gerada com Filter (array) e depois Map (JSX - Componentes)</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <ServicoCategoryRow
                        category={'Reformas'}
                        key={'reformas'}
                    />
                    {reformas.map(servico => <ServicoRow servico={servico} key={servico.name} />)}
                    <ServicoCategoryRow
                        category={'Domésticos'}
                        key={'domésticos'}
                    />
                    {assistencias.map(servico => <ServicoRow servico={servico} key={servico.name} />)}
                    <ServicoCategoryRow
                        category={'Assistencias'}
                        key={'assistencias'}
                    />
                    {assistencias.map(servico => <ServicoRow servico={servico} key={servico.name} />)}
                </tbody>
            </table> */}
        </>
    );
}