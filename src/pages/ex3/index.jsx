import './index.scss'
import {Link} from 'react-router-dom'

export default function Exercicio3() {
    return (
        <div className='pagina-exercicio3 pagina'>

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
                    <h1>Exercício 03 - Valor total por quantidade</h1>
                </section>

                <section className='descricao'>
                    <p>Implementar um programa em JavaScript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho, pequeno, médio e grande, sabendo que os valores são R$13,00, R$15,00 e R$17,50 respectivamente.</p>
                </section>

                <section className='aplicacao'>
                    <h4>Quantidade pequeno</h4>
                    <input type="text" placeholder='0' />
                    <h4>Quantidade médio</h4>
                    <input type="text" placeholder='0' />
                    <h4>Quantidade grande</h4>
                    <input type="text" placeholder='0' />
                    <h4 className='botao'>Executar</h4>
                </section>

                <div className='resultado'>Resultado: O total é R$0.00</div>
            </main>
            
        </div>
    )
}