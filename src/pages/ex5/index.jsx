import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio5() {
    const [nota1, setNota1] = useState()
    const [nota2, setNota2] = useState()
    const [nota3, setNota3] = useState()
    const [media, setMedia] = useState()

    function calcularMedia() {
        let m = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

        setMedia(m)
    }

    return (
        <div className='pagina-exercicio5 pagina'>
            
            <Cabecalho />

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
                    <input type="text" placeholder='0' onChange={e => setNota1(e.target.value)}/>
                    <h4>Nota 02:</h4>
                    <input type="text" placeholder='0' onChange={e => setNota2(e.target.value)}/>
                    <h4>Nota 03:</h4>
                    <input type="text" placeholder='0' onChange={e => setNota3(e.target.value)}/>
                    <h4 className='botao' onClick={calcularMedia}>Executar</h4>
                </section>

                <div className='resultado'>
                    {media}
                </div>
            </main>
        </div>
    )
}