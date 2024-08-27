import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'

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
            <Cabecalho />

            <Exercicio
                titulo='Exercicio 01 - Cupom de desconto'
                descricao='Implementar um programa em JavaScript para calcular o valor final de uma compra a partir do valor do compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.'
            />

            <main>
                <section className='aplicacao'>
                    <h4>Informe o valor do pedido</h4>
                    <input type="text" placeholder='0' value={pedido} onChange={e => setPedido(e.target.value)} />

                    <h4>Informe o valor do cupom</h4>
                    <input type="text" placeholder='0' value={cupom} onChange={e => setCupom(e.target.value)} />

                    <h4 className='botao' onClick={calcular}>Executar</h4>
                </section>

                <div className='resultado' >{`O total do seu pedido é R$${resultado}`}</div>
            </main>

        </div>
    )
}