import './index.scss'

export default function Tabela(props) {

    function titulo() {
        if (props.temp >= 39.6) 
            return 'titulo-vermelho';
        else 
            return '';
    }
    function escuro() {
        if (props.temp >= 39.6) 
            return 'vermelho-escuro';
        else 
            return '';
    } 
    function claro() {
        if (props.tem >= 39.6)
            return 'vermelho-claro';
        else 
            return '';
    }

    return (
        <div className='comp-tabela'>
            <section className='tabela'>
                <div className='colunas'>
                    <h1 className={'titulo' + titulo()}>Média</h1>
                    <p className={'escuro' + escuro()}>Maior igual a 41</p>
                    <p className={'claro' + claro()}>Maior igual a 39.6 e menor que 41</p>
                    <p className={'escuro' + escuro()}>Maior igual a 37.6 e menor que 39.6</p>
                    <p className={'claro' + claro()}>Maior igual a 36 e menor que 37.6</p>
                    <p className={'escuro' + escuro()}>Abaixo de 36</p>
                </div>

                <div className='colunas'>
                    <h1 className={'titulo' + titulo()}>Situação</h1>
                    <p className={'escuro' + escuro()}>Hipertermia</p>
                    <p className={'claro' + claro()}>Febre alta</p>
                    <p className={'escuro' + escuro()}>Febre</p>
                    <p className={'claro' + claro()}>Normal</p>
                    <p className={'escuro' + escuro()}>Hipotermia</p>
                </div>
            </section>
        </div>
    )
}