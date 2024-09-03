import './index.scss'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'
import Exercicio from '../../components/exercicio'
import { useState } from 'react'

export default function Exercicio6() {
    
    const [salarioBase, setSalarioBase] = useState()
    const [bonusPorcentagem, setBonusPorcentagem] = useState()
    const [descontos, setDescontos] = useState()
    const [resultado, setResultado] = useState('')

    function calcularSalarioLiquido() {
        let salarioLiquido =  salarioBase - (descontos - (bonusPorcentagem * 10)) 
        setResultado(`Seu salário líquido é de R$${salarioLiquido.toFixed(2)}`)
    }

    return(
        <div className='pagina-exercicio6 pagina'>
            <Cabecalho />
            <Exercicio
                titulo = 'Exercício 06 - Salário Líquido'
                descricao = 'Implementar um programa em JavaScript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais.'
            />

            <main>

                <section className='aplicacao'>
                    <h4>Salário Base:</h4>
                    <input type="text" value={salarioBase} onChange={a => setSalarioBase(a.target.value)}/>

                    <h4>Bônus Mensal em Porcentagem:</h4>
                    <input type="text" value={bonusPorcentagem} onChange={a => setBonusPorcentagem(a.target.value)}/>

                    <h4>Total de Descontos:</h4>
                    <input type="text" value={descontos} onChange={a  => setDescontos(a.target.value)}/> 
                    

                    <h4 className='botao' onClick={calcularSalarioLiquido}>Executar</h4>

                </section>

                { salarioBase != '' && descontos != '' && bonusPorcentagem != '' &&
                    <div className='resultado'>{resultado}</div>
                }

            </main>
        </div>
    )
}