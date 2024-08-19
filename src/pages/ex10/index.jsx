import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Exercicio10() {
    const [altura, setAltura] = useState()
    const [peso, setPeso] = useState()
    const [resultado, setResultado] = useState()
    const [situacao, setSituacao] = useState()
    let [lista, setLista] = useState([])

    function calcularImc() {
        let imc = Number(peso) / (Number(altura) * Number(altura))

        if (imc < 18.5) {
            setSituacao('Abaixo do Peso')
        } else if (imc >= 18.5 && imc <= 24.9) {
            setSituacao('Peso Normal')
        } else if (imc >= 25 && imc <= 29.9) {
            setSituacao('Sobrepeso')
        } else if (imc >= 30 && imc <= 34.9) {
            setSituacao('Obesidade Grau I')
        } else if (imc >= 35 && imc <= 39.9) {
            setSituacao('Obesidade Grau II')
        } else {
            setSituacao('Obesidade Grau III')
        }

        setResultado(`Altura: ${altura} | Peso: ${peso} | Situação: ${situacao}`)
        setLista([...lista, resultado])

    } 

    return (
        <div className='pagina-exercicio10 pagina'>
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
                    <h1>Exercício 10 - Cálculo de IMC com histórico</h1>
                </section>

                <section className='descricao'>
                    <p>Implementar um programa em JavaScript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.</p>
                </section>

                <section className='aplicacao'>
                    <h4>Altura:</h4>
                    <input type="text" onChange={e => setAltura(e.target.value)}/>

                    <h4>Peso:</h4>
                    <input type="text" onChange={e => setPeso(e.target.value)}/>
                    
                    <h4 className='botao' onClick={calcularImc}>Executar</h4>
                </section>

                <div className='resultado'>
                    {lista.map ((item, pos) =>

                        <div className='lista'>
                            <h4 key={pos} >{item}</h4>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}