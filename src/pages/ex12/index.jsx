import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio12() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState()
    const [masculino, setMasculino] = useState(false)
    const [feminino, setFeminino] = useState(true)
    const [maisVelho, setMaisVelho] = useState(0)
    const [mulherJovem, setMulherJovem] = useState()
    const [mediaIdades, setMediaIdades] = useState()
    const [homensMais30, setHomensMais30] = useState()
    const [mulherMenos18, setMulherMenos18] = useState()
    const [lista, setLista] = useState([])

    function organizarInformacoes() {
        let pessoa = {
            nome: nome,
            idade: idade,
        }

    }

    return (
        <div className='pagina-exercicio12 pagina'>
            <Cabecalho />

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
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>

                    <h4>Idade:</h4>
                    <input type="text" placeholder='0' value={idade} onChange={e => setIdade(e.target.value)}/>

                    <div className='checkbox'>
                        <h4>Sexo:</h4>
                        <input type="checkbox" value={masculino} onChange={e => setMasculino(e.target.checked)}/> <p>Masculino</p>
                        <input type="checkbox" value={feminino} onChange={e => setFeminino(e.target.checked)}/> <p>Feminino</p>
                    
                    </div>

                    <h4 className='botao' onClick={organizarInformacoes}>Executar</h4>

                </section>

                <div className='resultado'>

                </div>
            </main>
        </div>
    )
}