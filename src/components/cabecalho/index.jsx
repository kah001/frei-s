import './index.scss'
import {Link} from 'react-router-dom'

export default function Cabecalho() {
    return (
        <div className='comp-cabecalho'>
            <div className='parte1'>
                <img src="/assets/images/frei.jpg" alt="" />
                <h2>React FreiS</h2>
            </div>

            <div className='parte2'>
                <Link className='nolink' to='/'><h2>Início</h2></Link>
                <Link className='nolink' to='/sobre'><h2>Sobre</h2></Link>
            </div>
        </div>
    )
}