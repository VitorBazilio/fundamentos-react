import './index.css'
import ReactDom from "react-dom";
import React from "react";

import Primeiro  from './components/basicos/Primeiro'; 
import ComParametro from './components/basicos/ComParametro'


ReactDom.render(
    <div>
        
        <Primeiro/>
       <ComParametro titulo="Situação do Aluno" aluno="Emanuele" nota={688} />


    </div>, document.getElementById('root')
)