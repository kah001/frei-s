import './index.scss'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio4() {
    return (
        <div className='pagina-exercicio4 pagina'>
            
            <Cabecalho />

            <main>
                <section className='titulo'>
                    <Link to='/'><img src="/assets/images/seta esquerda.png" alt="" /></Link>
                    <h1>Exercício 04 - Cálculo de tempo</h1>
                </section>

                <section className='descricao'>
                    <p>Implementar um programa em JavaScript que calcule o tempo em que o livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.</p>
                </section>

                <section className='aplicacao'>
                    <h4>Nome do livro:</h4>
                    <input type="text" placeholder='Digite aqui' />
                    <h4>Total de páginas:</h4>
                    <input type="text" placeholder='0'/>
                    <h4>Segundos de leitura por página:</h4>
                    <input type="text" placeholder='0'/>
                    <h4 className='botao'>Calcular</h4>
                </section>

                <div className='resultado' ></div>
            </main>
        </div>
    )
}