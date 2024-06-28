import { useState } from "react";

export default function Ingresar () {
    const [Numero, setNumero] = useState(0)
    const [Mensaje1, setMensaje1] = useState("")
    const [Mensaje2, setMensaje2] = useState("")
    const [Mensaje3, setMensaje3] = useState("")
    const [Mensaje4, setMensaje4] = useState("")

    function calcular () {
        Numero >0 ? (setMensaje1(" Es positivo ")) : ( setMensaje1("Negativo"));
        Numero %2 ===0 ? (setMensaje2(" Es Par ")) : ( setMensaje2("Es Impar"));
        Numero %7 ===0 ? (setMensaje3(" es multiplo de 7 ")) : ( setMensaje3("no es multiplo de 7"));
        
        const numeroInvertido = parseInt(Numero.toString().split("").reverse().join(""))
        return Numero == numeroInvertido ? (setMensaje4(" Es Capicua ")) : ( setMensaje4("No es Capicua"));
    }


    return(
        <>
            <input type="number" value={Numero} onChange={(e) => setNumero(e.target.value)} />
            <button onClick={calcular}>calcular</button>
            <p>{Mensaje1}</p>
            <p>{Mensaje2}</p>
            <p>{Mensaje3}</p>
            <p>{Mensaje4}</p>
        </>
    )
}