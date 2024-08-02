import './index.scss'
import {Link} from 'react-router-dom'

export default function Exercicio1() {
    return (
        <div className='pagina-exercicio1 pagina'>

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
                    <h1>Exercício 01 - Cupom de desconto</h1>
                </section>

                <section className='descricao'>
                    <p>Implementar um programa em JavaScript para calcular o valor final de uma compra a partir do valor do compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>
                </section>

                <section className='aplicacao'>
                    <h4>Informe o valor do pedido</h4>
                    <input type="text" placeholder='0' />
                    <h4>Informe o valor do cupom</h4>
                    <input type="text" placeholder='0' />
                    <h4 className='botao'>Executar</h4>
                </section>

                <div className='resultado'>Resultado: O total é R$0.00</div>
            </main>
            
        </div>
    )
}