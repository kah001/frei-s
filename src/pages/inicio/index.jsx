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
                        <p>Exercício 1</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex2'>
                    <div className='ex'>
                        <img className='verde' src="/assets/images/quadradoV.png" alt="" />
                        <p>Converter Kg/Gramas</p>
                        <br />
                        <p>Exercício 2</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex3'>
                    <div className='ex'>
                        <img className='azul' src="/assets/images/quadradoAL.png" alt="" />
                        <p>Valor total por quantidade</p>
                        <br />
                        <p>Exercício 3</p>
                    </div>
                    </Link>

                    <Link className='nolink' to='/ex4'>
                    <div className='ex'>
                        <img className='vermelho' src="/assets/images/quadradoVE.png" alt="" />
                        <p>Calcular tempo</p>
                        <br />
                        <p>Exercício 4</p>
                    </div>
                    </Link>
                </div>
            </section>

        </div>
    )
}