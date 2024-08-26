import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio10() {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [lista, setLista] = useState([])

    function calcularImc() {
        if (altura == '' || peso == '') {
            return;
        }

        let imc = Number(peso) / (Number(altura) * Number(altura))
        let situacao = ''

        if (imc < 18.5) {
            situacao = 'Abaixo do Peso'
        } else if (imc >= 18.5 && imc <= 24.9) {
            situacao =  'Peso Normal'
        } else if (imc >= 25 && imc <= 29.9) {
            situacao = 'Sobrepeso'
        } else if (imc >= 30 && imc <= 34.9) {
            situacao = 'Obesidade Grau I'
        } else if (imc >= 35 && imc <= 39.9) {
            situacao = 'Obesidade Grau II'
        } else {
            situacao = 'Obesidade Grau III'
        }

        let resultado = `Altura: ${altura} | Peso: ${peso} | Situação: ${situacao}`
        setLista([...lista, resultado])

        setAltura('')
        setPeso('')
    } function remover(pos) {
        lista.splice(pos, 1)
        setLista([...lista])
    }

    return (
        <div className='pagina-exercicio10'>
            
            <Cabecalho />

            <main>
                <section className='titulo'>
                    <Link to='/'><img src="/assets/images/seta esquerda.png" alt="" /></Link>
                    <h1>Exercício 10 - Cálculo de IMC com histórico</h1>
                </section>

                <section className='descricao'>
                    <p>Implementar um programa em JavaScript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.</p>
                </section>

                <div className='imc'>
                    <section className='aplicacao'>
                        <h4>Altura:</h4>
                        <input type="text" value={altura} onChange={e => setAltura(e.target.value)}/>

                        <h4>Peso:</h4>
                        <input type="text" value={peso} onChange={e => setPeso(e.target.value)}/>
                    
                        <h4 className='botao' onClick={calcularImc}>Executar</h4>
                    </section>

                    <div className='resultado'>
                        {lista.map ((item, pos) =>

                            <div className='lista'>
                                <h4 key={pos}>{item}</h4><i className='fa fa-trash' onClick={() => remover(pos)}></i>
                            </div>
                            
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}