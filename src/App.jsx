import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <React.Fragment id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={0} max={60}/>
        <Fragmento />
        <ComParametro titulo="Situação do Aluno" aluno="Emanuele" nota={688} />
        <Primeiro />



    </React.Fragment>
