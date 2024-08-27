import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Cards from '../../components/cards'

export default function Inicio() {
    return (
        <div className="pagina-inicio pagina">
            <Cabecalho />

            <section>
                <h2>Escolha um treino...</h2>

                <div className='exercicios'>
                    <Cards
                        pagina = 'ex1'
                        cor = 'preto'
                        titulo = 'Cupom de desconto'
                        subtitulo = 'Exercício 01'
                    />  

                    <Cards
                        pagina = 'ex2'
                        cor = 'rosa'
                        titulo = 'Converter Kg/Gramas'
                        subtitulo = 'Exercício 02'
                    />

                    <Cards
                        pagina = 'ex3'
                        cor = 'verde'
                        titulo = 'Valor total por quantidade'
                        subtitulo = 'Exercício 03'
                    />

                    <Cards
                        pagina = 'ex4'
                        cor = 'ciano'
                        titulo = 'Calcular tempo'
                        subtitulo = 'Exercício 04'
                    /> 

                    <Cards
                        pagina = 'ex5'
                        cor = 'vermelho'
                        titulo = 'Média de notas'
                        subtitulo = 'Exercício 05'
                    />

                    <Cards
                        pagina = 'ex6'
                        cor = 'azul'
                        titulo = 'Salário líquido'
                        subtitulo = 'Exercício 06'
                    />

                    <Cards 
                        pagina = 'ex7'
                        cor = 'marrom'
                        titulo = 'Cores primárias'
                        subtitulo = 'Exercício 07'
                    />
                    
                    <Cards 
                        pagina = 'ex8'
                        cor = 'magenta'
                        titulo = 'Temperatura'
                        subtitulo = 'Exercício 08'
                    />

                    <Cards
                        pagina = 'ex9'
                        cor = 'laranja'
                        titulo = 'Sorveteria'
                        subtitulo = 'Exercício 09'
                    />

                    <Cards
                        pagina = 'ex10'
                        cor = 'amarelo'
                        titulo = 'Cálculo de IMC'
                        subtitulo = 'Exercício 10'
                    />

                    <Cards
                        pagina = 'ex11'
                        cor = 'roxo'
                        titulo = 'Mostrar tabuada'
                        subtitulo = 'Exercício 11'
                    />

                    <Cards
                        pagina = 'ex12'
                        cor = 'cinza'
                        titulo = 'Comparador de pessoas'
                        subtitulo = 'Exercício 12'
                    />



                </div>
            </section>

        </div>
    )
}