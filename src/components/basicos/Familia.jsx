import React from "react";
import FamiliaMembro from './FamiliaMembro'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return(
        <>
            <FamiliaMembro nome='Vitor' sobrenome='Bazilio'/>
            <FamiliaMembro nome='Emanuele' sobrenome='Macluf'/>
            <FamiliaMembro nome='Lucas' sobrenome='Pereira'/>
        </>
    )
}