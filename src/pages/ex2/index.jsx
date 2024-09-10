import { useState } from 'react'
import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'

export default function Exercicio2() {
    const [gramas, setGramas] = useState()
    const [resultado, setResultado] = useState()

    function converter() {
        let kilos = gramas / 1000

        setResultado(`O valor em kilos é ${kilos}`)
    }

    return (
        <div className='pagina-exercicio2 pagina'>
            <Cabecalho />

            <Exercicio 
                titulo = 'Exercício 02 - Converter Kg/Gramas'
                descricao = 'Implementar um programa em JavaScript para converter kilos em gramas'
            />

            <main>
                
                <section className='aplicacao'>
                    <h4>Valor em gramas</h4>
                    <input type="text" placeholder='0' value={gramas} onChange={e => setGramas(e.target.value)} />
                    <h4 className='botao' onClick={converter}>Executar</h4>
                </section>

                <div className='resultado'>{resultado}</div>


            </main>

        </div>
    )
}