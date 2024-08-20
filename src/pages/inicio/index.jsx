import './index.scss'
import {Link} from 'react-router-dom'

export default function Inicio() {
    return (
        <div className="pagina-inicio pagina">

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

            <section>
                <h2>Escolha um treino...</h2>

                <div className='exercicios'>
                    <Link className='nolink' to='/ex1'>
                    <div className='ex'>
                        <img className='amarelo' src="/assets/images/quadradoA.png" alt="" />
                        <p>Cupom de Desconto</p>
                        <br />
                        <p>Exercício 01</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex2'>
                    <div className='ex'>
                        <img className='verde' src="/assets/images/quadradoV.png" alt="" />
                        <p>Converter Kg/Gramas</p>
                        <br />
                        <p>Exercício 02</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex3'>
                    <div className='ex'>
                        <img className='azul' src="/assets/images/quadradoAL.png" alt="" />
                        <p>Valor total por quantidade</p>
                        <br />
                        <p>Exercício 03</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex4'>
                    <div className='ex'>
                        <img className='vermelho' src="/assets/images/quadradoVE.png" alt="" />
                        <p>Calcular tempo</p>
                        <br />
                        <p>Exercício 04</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex5'>
                    <div className='ex'>
                        <img className='roxo' src="/assets/images/quadradoRX.png" alt="" />
                        <p>Média de notas</p>
                        <br />
                        <p>Exercício 05</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex6'>
                    <div className='ex'>
                        <img className='rosa' src="/assets/images/quadradoR.png" alt="" />
                        <p>Salário Líquido</p>
                        <br />
                        <p>Exercício 06</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex10'>
                    <div className='ex'>
                        <img className='rosa' src="/assets/images/quadradoR.png" alt="" />
                        <p>Cálculo de IMC</p>
                        <br />
                        <p>Exercício 10</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex11'>
                    <div className='ex'>
                        <img className='preto' src="/assets/images/quadradoP.png" alt="" />
                        <p>Mostrar tabuada</p>
                        <br />
                        <p>Exercício 11</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex12'>
                    <div className='ex'>
                        <img className='rosa' src="/assets/images/quadradoR.png" alt="" />
                        <p>Comparador de Pessoas</p>
                        <br />
                        <p>Exercício 12</p>
                    </div>
                    </Link>


                </div>
            </section>

        </div>
    )
}