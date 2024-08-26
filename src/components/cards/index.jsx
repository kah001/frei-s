import './index.scss'
import { Link } from 'react-router-dom'

export default function Cards(props) {
    return (
        <div className='comp-cards'>
            <Link className='nolink' to={props.pagina}>
                <div className='ex'>
                    <div className={props.cor}></div>
                    <p>{props.titulo}</p>
                    <br />
                    <p>{props.subtitulo}</p>
                </div>
            </Link>
        </div>
    )
}