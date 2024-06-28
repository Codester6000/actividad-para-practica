import { useState } from "react";

export default function Cambiartext (){
    const [Texto, setTexto] = useState("")
    const [texto1, settexto1] = useState("")
    function Cambiar () {
        settexto1 (Texto) 
    }


    return(
        <>  
            <p>{texto1}</p>
            <input type="text" value={Texto} onChange={ (e) => setTexto(e.target.value)}/>
            <button onClick={Cambiar}>cambiar</button>
        
        </>
    )


}