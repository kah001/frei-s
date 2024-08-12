import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/inicio'
import Sobre from './pages/sobre'
import Exercicio1 from './pages/ex1'
import Exercicio2 from './pages/ex2'
import Exercicio3 from './pages/ex3'
import Exercicio4 from './pages/ex4'
import Exercicio5 from './pages/ex5'
import Exercicio11 from './pages/ex11'

export default function Navegação() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                 <Routes>
                    <Route path='/' element= {<Inicio />}></Route>
                    <Route path='/sobre' element= {<Sobre/>}></Route>
                    <Route path='/ex1' element= {<Exercicio1/>}></Route>
                    <Route path='/ex2' element= {<Exercicio2/>}></Route>
                    <Route path='/ex3' element= {<Exercicio3/>}></Route>
                    <Route path='/ex4' element= {<Exercicio4/>}></Route>
                    <Route path='/ex5' element= {<Exercicio5/>}></Route>
                    <Route path='/ex11' element= {<Exercicio11/>}></Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}