import { useState } from "react";

export default function BaseAltura (){
    const [Base, setBase] = useState(0)
    const [Altura, setAltura] = useState(0)

    function Area (){
        const calculararea = parseFloat(Base*Altura)
        alert (`el area es de ${calculararea}`)
    }

    function Perimetro (){
        const calcularperimetro = 2* parseFloat(Base+Altura)
        alert (`el perimetro es de ${calcularperimetro}`)
        
    }

    return(
        <>
        <input type="number" value={Base} onChange={(e) => setBase(e.target.value)}/>
        <input type="number" value={Altura} onChange={(e) => setAltura(e.target.value)}/>
        <button onClick={Area}>Area</button>
        <button onClick={Perimetro}>perimetro</button>
        </>
    )


}