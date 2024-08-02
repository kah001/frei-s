import './index.scss'
import {Link} from 'react-router-dom'

export default function Sobre() {
    return (
        <div className='pagina-sobre pagina'>

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

            <main>
            <section>
                <h2>Sobre</h2>
                <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a <br /> aprimorar as suas habilidades em Node.js e Lógica de Programação de forma prática e <br /> envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o <br /> aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa <br /> praticar e testar seus conhecimentos em Node.js e Lógica de Programação, permitindo <br /> que você avance no seu próprio ritmo e de acordo com suas necessidades.</p>
                <br />
                <p>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer <br /> e desenvolver suas habilidades. <br /> Estamos ansiosos para ver seu progresso e sucesso!</p>
                <img src="/assets/images/frei.jpg" alt="" />
            </section>
            </main>

            <section>
                <h2>Sobre</h2>
                <h1>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a <br /> aprimorar as suas habilidades em Node.js e Lógica de Programação de forma prática e <br /> envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o <br /> aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa <br /> praticar e testar seus conhecimentos em Node.js e Lógica de Programação, permitindo <br /> que você avance no seu próprio ritmo e de acordo com suas necessidades.</h1>
                <br />
                <h1>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer <br /> e desenvolver suas habilidades. <br /> Estamos ansiosos para ver seu progresso e sucesso!</h1>
                <img src="/assets/images/frei.jpg" alt="" />
            </section>
        </div>
    )
}