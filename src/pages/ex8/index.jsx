import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'
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

    function titulo() {
        if (temperatura >= 37.6)
            return 'vermelho';
        else
            return '';
    }
    function escuro() {
        if (temperatura >= 37.6)
            return 'vermelho-escuro';
        else
            return '';
    }
    function claro() {
        if (temperatura >= 37.6)
            return 'vermelho-claro';
        else
            return '';
    }

    return (
        <div className='pagina-exercicio8 pagina'>
            <Cabecalho />

            <Exercicio
                titulo='Exercício 08 - Temperatura'
                descricao='Implementar um programa em JavaScript que a partir da temperatura avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação.'
            />



            <main>
                <section className='tabela'>
                    <div className='colunas'>
                        <h1 className={'titulo ' + titulo()}>Média</h1>
                        <p className={'escuro ' + escuro()}>Maior igual a 41</p>
                        <p className={'claro ' + claro()}>Maior igual a 39.6 e menor que 41</p>
                        <p className={'escuro ' + escuro()}>Maior igual a 37.6 e menor que 39.6</p>
                        <p className={'claro ' + claro()}>Maior igual a 36 e menor que 37.6</p>
                        <p className={'escuro ' + escuro()}>Abaixo de 36</p>
                    </div>

                    <div className='colunas'>
                        <h1 className={'titulo ' + titulo()}>Situação</h1>
                        <p className={'escuro ' + escuro()}>Hipertermia</p>
                        <p className={'claro ' + claro()}>Febre alta</p>
                        <p className={'escuro ' + escuro()}>Febre</p>
                        <p className={'claro ' + claro()}>Normal</p>
                        <p className={'escuro ' + escuro()}>Hipotermia</p>
                    </div>
                </section>


                <section className='aplicacao'>
                    <h4>Temperatura:</h4>
                    <input type="text" value={temperatura} onChange={a => setTemperatura(a.target.value)} />
                    <h4 className='botao' onClick={verificarTemperatura}>Executar</h4>
                </section>

                <div className='resultado'>{situacao}</div>
            </main>
        </div>
    )
}