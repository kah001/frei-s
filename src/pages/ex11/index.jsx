import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio11() {
    const [tabuada, setTabuada] = useState([])
    const [numero, setNumero] = useState(0)

    function criarTabuada() {
        for (let i = 0; i <= 10; i++) {
            tabuada[i] = `${numero} X ${i} = ${numero * i}`
        }
        setTabuada([...tabuada])
    }

    return (
        <div className='pagina-exercicio11 pagina'>
            
            <Cabecalho />

            <main>
                <section className='titulo'>
                    <Link to='/'><img src="/assets/images/seta esquerda.png" alt="" /></Link>
                    <h1>Exercício 11 - Tabuada</h1>
                </section>

                <section className='descricao'>
                    <p>Implementar um programa em JavaScript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar em forma de 'A x B = X</p>
                </section>

                <section className='aplicacao'>
                    <h4>Tabuada do:</h4>
                    <input type="text" placeholder='0' onChange={e => setNumero(e.target.value)}/>
                    
                    <h4 className='botao' onClick={criarTabuada}>Executar</h4>
                </section>

                <div className='resultado'>
                    {tabuada.map ((item, pos) =>
                
                        <div className='itens'>
                            <h4 key={pos}>{item}</h4>
                            <br />
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}