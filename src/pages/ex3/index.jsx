import { useState } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio3() {
    const [pequeno, setPequeno] = useState()
    const [medio, setMedio] = useState()
    const [grande, setGrande] = useState()
    const [resultado, setResultado] = useState()

    function calcular() {
        let total = (13.00 * pequeno) + (15.00 * medio) + (17.50 * grande)

        setResultado(total)
    }

    return (
        <div className='pagina-exercicio3 pagina'>

            <Cabecalho />

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
                    <input type="text" placeholder='0' value={pequeno} onChange={e => setPequeno(e.target.value)} />
                    <h4>Quantidade médio</h4>
                    <input type="text" placeholder='0' value={medio} onChange={e => setMedio(e.target.value)} />
                    <h4>Quantidade grande</h4>
                    <input type="text" placeholder='0' value={grande} onChange={e => setGrande(e.target.value)} />
                    <h4 className='botao' onClick={calcular}>Executar</h4>
                </section>

                <div className='resultado'>{`O total da sua compra é R$${resultado}`}</div>
            </main>
            
        </div>
    )
}