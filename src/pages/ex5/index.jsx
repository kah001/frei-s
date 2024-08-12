import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercicio5() {
    return (
        <div className='pagina-exercicio5 pagina'>
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
                    <h1>Exercício 05 - Média de Notas</h1>
                </section>

                <section className='descricao'>
                    <p>Implementar um programa em JavaScript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
                </section>

                <section className='aplicacao'>
                    <h4>Nota 01:</h4>
                    <input type="text" placeholder='0' />
                    <h4>Nota 02:</h4>
                    <input type="text" placeholder='0'/>
                    <h4>Nota 03:</h4>
                    <input type="text" placeholder='0'/>
                    <h4 className='botao'>Executar</h4>
                </section>

                <div className='resultado' ></div>
            </main>
        </div>
    )
}