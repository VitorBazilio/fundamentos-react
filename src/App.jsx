import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'


// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='CardsDiv'>
            <Card titulo="#05 - Familia Membros" color='#2a9d8f'>
                <Familia /></Card>

            <Card titulo="#04 - Desafio Aleatorio" color='#fb8500'>
                <Aleatorio min={0} max={60} /></Card>

            <Card titulo="#03 - Fragmento" color='#8ecae6'>
                <Fragmento /></Card>

            <Card titulo="#02 - Aluno" color='#ffc8dd'>
                <ComParametro titulo="Situação do Aluno" aluno="Emanuele" nota={688} /></Card>

            <Card titulo="#01 - Primeiro Componente" color='#fb8500'>
                <Primeiro /></Card>
        </div>


    </div>
