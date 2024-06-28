import { useState } from "react";

export default function Incremetar () {
    const [cuenta, setCuenta] = useState(0)

    function contar() {
        setCuenta(cuenta+1)
    }
    function descontar() {
        setCuenta(cuenta-1)
    }


    return(
        <> 
        <p >{cuenta}</p>
        <button onClick={contar}>incremetar</button>
        <button onClick={descontar}>decrementar</button>
            
        </>
    )

}