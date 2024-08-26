import './index.scss'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio6() {
    return(
        <div className='pagina-exercicio6 pagina'>
            <Cabecalho />

            <main>
                <section className='titulo'>
                    <Link to='/'><img src="/assets/images/seta esquerda.png" alt="" /></Link>
                    <h1>Exercício 06 - Salário Líquido</h1>
                </section>

                <section className='descricao'>
                    <p>Implementar um programa em JavaScript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais.</p>
                </section>

                <section className='aplicacao'>
                    <h4>Salário Base:</h4>
                    <input type="text"/>

                    <h4>Bônus Mensal em Porcentagem:</h4>
                    <input type="text" />

                    <h4>Total de Descontos:</h4>
                    <input type="text" /> 
                    

                    <h4 className='botao'>Executar</h4>

                </section>

                <div className='resultado'>

                </div>
            </main>
        </div>
    )
}