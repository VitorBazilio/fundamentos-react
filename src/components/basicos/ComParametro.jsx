import React from "react";

export default function ComParametro(props){
    const status = props.nota >= 680 ? 'Aprovada' : 'Reprovada'
    
    return (
        <>
        <h2>{props.Titulo}</h2>
            <p>
                    <strong>{props.aluno} </strong> 
                     Nota: <strong>{props.nota} </strong> 
                     <p><strong>{status}</strong> </p> 
            </p>
            </>
    )
}