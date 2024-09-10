import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'

export default function Exercicio12() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState()
    const [masculino, setMasculino] = useState(false)
    const [feminino, setFeminino] = useState(false)
    const [lista, setLista] = useState([])

    function organizarInformacoes() {
        let sexo = ''
        if (masculino == true && feminino == true) {
            return;
        } else if (masculino == false) {
            sexo = 'Feminino'
        } else {
            sexo = 'Masculino'
        }

        let pessoa = {
            nome: nome,
            idade: idade,
            sexo: sexo
        }

        


        setLista([...lista, pessoa])
        setNome('')
        setIdade('')
    } function apagar(pos) {
        lista.splice(pos, 1)
        setLista([...lista])
    } function editar (pos) {
        
    }

    return (
        <div className='pagina-exercicio12 pagina'>
            <Cabecalho />
            <Exercicio
                titulo = 'Exercício 12 - Comparador de pessoas'
                descricao = 'Implementar um programa em JavaScript que leia o nome, a idade e o sexo de várias pessoas.'
            />

            <main>

                <div className='programa'>
                    <section className='aplicacao'>
                        <h4>Nome:</h4>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

                        <h4>Idade:</h4>
                        <input type="text" placeholder='0' value={idade} onChange={e => setIdade(e.target.value)} />

                        <div className='checkbox'>
                            <h4>Sexo:</h4>
                            <input type="checkbox" value={masculino} onChange={e => setMasculino(e.target.checked)} /> <p>Masculino</p>
                            <input type="checkbox" value={feminino} onChange={e => setFeminino(e.target.checked)} /> <p>Feminino</p>

                        </div>

                        <h4 className='botao' onClick={organizarInformacoes}>Executar</h4>

                        <div className='info'>
                            <p>Pessoa mais velha: </p>
                            <p>Mulher mais jovem: </p>
                            <p>Homens com mais de 30: </p>
                            <p>Mulheres com menos de 18: </p>
                        </div>

                    </section>


                    <div className='res'>
                        {lista.map((item, pos) =>
                            <div className='pessoas' key={pos}>
                                <h2>{item.nome}</h2>
                                <h2>{item.idade}</h2>
                                <br />
                                <p>{item.sexo}</p>

                                <div className='botoes'>
                                    <p className='e' onClick={editar}>Editar</p>
                                    <p className='a' onClick={apagar}>Apagar</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </main>
        </div>
    )
}