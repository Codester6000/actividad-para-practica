import { useState } from "react";

export default function Entrada() {
    const [texto, settexto] = useState("");
    const [entrada, setentrada] = useState("")
    

    const modificar = () => {
        console.log("usuario hiso click");
        settexto(entrada);
    };
    
    return (
        <>
            <input value={entrada} onChange={(e)=> setentrada(e.target.value)}/>
            <button onClick={modificar}>modificar</button>
            <p>Texto ingresado: {texto}</p>
        </>
    );
}