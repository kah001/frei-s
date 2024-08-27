import './index.scss'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'

export default function Exercicio6() {
    return(
        <div className='pagina-exercicio6 pagina'>
            <Cabecalho />
            <Exercicio
                titulo = 'Exercício 06 - Salário Líquido'
                descricao = 'Implementar um programa em JavaScript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais.'
            />

            <main>

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