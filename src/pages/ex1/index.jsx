import './index.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function Exercicio1() {
    const [pedido, setPedido] = useState()
    const [cupom, setCupom] = useState()
    const [resultado, setResultado] = useState()

    function calcular() {
        let total = Number()

        if (cupom == 'QUERO50') {
            total = pedido - (0.50 * pedido)
        } else {
            total = pedido
        }

        setResultado(total)
    }


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
                    <input type="text" placeholder='0' value={pedido} onChange={e => setPedido(e.target.value)}/>

                    <h4>Informe o valor do cupom</h4>
                    <input type="text" placeholder='0' value={cupom} onChange={e => setCupom(e.target.value)}/>
                    
                    <h4 className='botao' onClick={calcular}>Executar</h4>
                </section>

                <div className='resultado' >{`O total do seu pedido é R$${resultado}`}</div>
            </main>
            
        </div>
    )
}