import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'
import Tabela from '../../components/tabela'
import { useState } from 'react'

export default function Exercicio8() {

    const [temperatura, setTemperatura] = useState()
    const [situacao, setSituacao] = useState('')

    function verificarTemperatura() {
        if (temperatura >= 41) {
            setSituacao('A situação pra sua temperatura é Hipertermia')
        } else if (temperatura >= 39.6 && temperatura < 41) {
            setSituacao('A situação pra sua temperatura é Febre Alta')
        } else if (temperatura >= 37.6 && temperatura < 39.6) {
            setSituacao('A situação pra sua temperatura é Febre')
        } else if (temperatura >= 36 && temperatura < 37.6) {
            setSituacao('A situação pra sua temperatura é Normal')
        } else {
            setSituacao('A situação pra sua temperatura é Hipotermia')
        }
    }

    return (
        <div className='pagina-exercicio8 pagina'>
            <Cabecalho />

            <Exercicio
                titulo='Exercício 08 - Temperatura'
                descricao='Implementar um programa em JavaScript que a partir da temperatura avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação.'
            />

            <Tabela 
                temp = '39.6'
            />

            <main>
                <section className='aplicacao'>
                    <h4>Temperatura:</h4>
                    <input type="text" value={temperatura} onChange={a => setTemperatura(a.target.value)}/>
                    <h4 className='botao' onClick={verificarTemperatura}>Executar</h4>
                </section>

                {temperatura != '' &&
                    <div className='resultado'>{situacao}</div>
                }
            </main>
        </div>
    )
}