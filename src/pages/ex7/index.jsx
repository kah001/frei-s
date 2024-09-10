import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'
import { useState } from 'react'

export default function Exercicio7() {

    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [resultado, setResultado] = useState(false)

    function verificarCores () {
        if (cor1 == 'amarelo' && cor2 == 'azul' || cor1 == 'azul' && cor2 == 'amarelo') {
            setResultado(`As duas cores são primárias? ${true}`)
        } else if (cor1 == 'amarelo' && cor2 == 'vermelho' || cor1 == 'vermelho' && cor2 == 'amarelo') {
            setResultado(`As duas cores são primária? ${true}`)
        } else if (cor1 == 'vermelho' && cor2 == 'azul' || cor1 == 'azul' && cor2 == 'vermelho') {
            setResultado(`As duas cores são primárias? ${true}`)
        }else if (cor1 == 'amarelo' && cor2 == 'amarelo') {
            setResultado(`As duas cores são primárias? ${true}`)
        } else if (cor1 == 'azul' && cor2 == 'azul') {
            setResultado(`As duas cores são primárias? ${true}`)
        } else if (cor1 == 'vermelho' && cor2 == 'vermelho') {
            setResultado(`As duas cores são primárias? ${true}`)
        } else {
            setResultado(`As duas cores são primárias? ${false}`)
        }
    }

    return (
        <div className='pagina-exercicio7 pagina'>
            <Cabecalho />
            <Exercicio 
                titulo = 'Exercício 07 - Cores Primárias'
                descricao = 'Implementar um programa em JavaScript para verificar se duas cores são primárias.'
            />

            <main>
                <section className='aplicacao'>
                    <h4>Cor 1:</h4>
                    <input type="text" value={cor1} onChange={a => setCor1(a.target.value)}/>
                    <h4>Cor 2:</h4>
                    <input type="text" value={cor2} onChange={a => setCor2(a.target.value)}/>

                    <h4 className='botao' onClick={verificarCores}>Executar</h4>
                </section>

                <div className='resultado'>{resultado}</div>

            </main>
        </div>
    )
}