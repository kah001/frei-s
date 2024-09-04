import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'
import { useState } from 'react'

export default function Exercicio4() {

    const [nomeLivro, setNomeLivro] = useState('')
    const [paginas, setPaginas] = useState()
    const [tempoLeitura, setTempoLeitura] = useState()
    const [resultado, setResultado] = useState()

    function calcularTempo() {
        let total = paginas * tempoLeitura / 3600

        setResultado(`Você lerá ${nomeLivro} em ${total.toFixed(2)} horas`)
    }

    return (
        <div className='pagina-exercicio4 pagina'>
            
            <Cabecalho />
            <Exercicio
                titulo = 'Exercício 04 - Cálculo de tempo'
                descricao = 'Implementar um programa em JavaScript que calcule o tempo em que o livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.'
            />

            <main>
                <section className='aplicacao'>
                    <h4>Nome do livro:</h4>
                    <input type="text" placeholder='Digite aqui' value={nomeLivro} onChange={a => setNomeLivro(a.target.value)}/>
                    <h4>Total de páginas:</h4>
                    <input type="text" placeholder='0' value={paginas} onChange={a => setPaginas(a.target.value)}/>
                    <h4>Segundos de leitura por página:</h4>
                    <input type="text" placeholder='0' value={tempoLeitura} onChange={a => setTempoLeitura(a.target.value)}/>
                    <h4 className='botao' onClick={calcularTempo}>Executar</h4>
                </section>

                <div className='resultado' >{resultado}</div>
            </main>
        </div>
    )
}