import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {


    const {min, max} = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (<>
        
        <p><strong>Valor minimo: </strong> {min}</p>
        <p><strong>Valor maximo: </strong> {max}</p>
        <p><strong>Valor escolhido: </strong> {aleatorio}</p>
    </>)
}