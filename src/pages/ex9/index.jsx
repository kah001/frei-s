import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'
import { useState } from 'react'

export default function Exercicio9() {
    const [gramas, setGramas] = useState()
    const [resultado, setResultado] = useState()

    function calcularTotal() {
        let total = Number()

        if (gramas < 1000) {
            total = gramas * 3.50
        } else if (gramas >= 1000) {
            total = (gramas - 1000)
        } else {
            
        }

        setResultado(`O total a pagar é R$${total.toFixed(2)}`)
    }

    return (
        <div className='pagina-exercicio9 pagina'>
            <Cabecalho />
            <Exercicio
                titulo = 'Exercício 09 - Sorveteria'
                descricao = 'Implementar um programa em JavaScript que calcule o total a se pagar de uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$3.50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.'
            />

            <main>
                <section className='aplicacao'>
                    <h4>Total de gramas:</h4>
                    <input type="text" value={gramas} onChange={a => setGramas(a.target.value)}/>
                    <div className='botao' onClick={calcularTotal}>Executar</div>
                </section>

                { gramas != '' &&
                    <div className='resultado'>{resultado}</div>
                }
            </main>
        </div>
    )
}