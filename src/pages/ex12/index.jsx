import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Exercicio12() {
    const [nomes, setNomes] = useState([])
    const [idades, setIdades] = useState([])
    const [sexo, setSexo] = useState([])
    const [maisVelho, setMaisVelho] = useState()
    const [mulherJovem, setMulherJovem] = useState()
    const [mediaIdades, setMediaIdades] = useState()
    const [homensMais30, setHomensMais30] = useState()
    const [mulherMenos18, setMulherMenos18] = useState()

    return (
        <div className='pagina-exercicio12 pagina'>
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
                    <h1>Exercício 12 - Comparador de Pessoas</h1>
                </section>

                <section className='descricao'>
                    <p>Implementar um programa em JavaScript que leia o nome, a idade e o sexo de várias pessoas.</p>
                </section>

                <section className='aplicacao'>
                    <h4>Nome:</h4>
                    <input type="text"/>

                    <h4>Idade:</h4>
                    <input type="text" placeholder='0' />

                    <div className='checkbox'>
                        <h4>Sexo:</h4>
                        <input type="checkbox" /> <p>Masculino</p>
                        <input type="checkbox" /> <p>Feminino</p>
                    
                    </div>

                    <h4 className='botao'>Executar</h4>

                </section>

                <div className='resultado'>

                </div>
            </main>
        </div>
    )
}