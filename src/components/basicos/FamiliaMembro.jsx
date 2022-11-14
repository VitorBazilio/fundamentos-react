import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const {nome, sobrenome} = props;

    return (
        <>
            <p>{nome} <strong>{sobrenome}</strong></p>
        </>    
        )


}