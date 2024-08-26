import { useState } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio2() {
    const [gramas, setGramas] = useState()
    const [resultado, setResultado] = useState()

    function converter() {
        let kilos = gramas / 1000

        setResultado(kilos)
    }

    return (
        <div className='pagina-exercicio2 pagina'>

            <Cabecalho />

            <main>
                <section className='titulo'>
                    <Link to='/'><img src="/assets/images/seta esquerda.png" alt="" /></Link>
                    <h1>Exercício 02 - Converter Kg/gramas</h1>
                </section>
                <section className='descricao'>
                    <p>Implementar um programa em JavaScript para converter kilos em gramas</p>
                </section>
                
                <section className='aplicacao'>
                    <h4>Valor em gramas</h4>
                    <input type="text" placeholder='0' value={gramas} onChange={e => setGramas(e.target.value)} />
                    <h4 className='botao' onClick={converter}>Executar</h4>
                </section>

                <div className='resultado'>{`O valor em kilos é ${resultado}`}</div>

            </main>

        </div>
    )
}