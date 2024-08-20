import './index.scss'
import { Link } from 'react-router-dom'

export default function Exercicio6() {
    return(
        <div className='pagina-exercicio6 pagina'>
            <header>
                <div className='parte1'>
                    <img src="/assets/images/frei.jpg" alt="" />
                    <h2>React FreiS</h2>
                </div>

                <div className='parte2'>
                    <Link className='nolink' to='/'><h2>Início</h2></Link>
                    <Link className='nolink' to='/sobre'><h2>Sobre</h2></Link>
                </div>
            </header>

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