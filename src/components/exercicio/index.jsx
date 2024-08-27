import './index.scss'
import { Link } from 'react-router-dom'

export default function Exercicio(props) {
    return (
        <div className='comp-exercicio'>
            <section className='titulo'>
                <Link to='/'><img src="/assets/images/seta esquerda.png" alt="" /></Link>
                <h1>{props.titulo}</h1>
            </section>

            <section className='descricao'>
                <p>{props.descricao}</p>
            </section>

        </div>
    )
}