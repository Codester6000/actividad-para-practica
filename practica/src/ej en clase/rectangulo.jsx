import { useState } from "react";

export default function Calculador() {
    const [Base, setBase] = useState(0);
    const [Altura, setAltura] = useState(0);
    
    const Perimetro= () => {
        const Perimetro1 = 2 * (parseInt(Base) + parseInt(Altura))
        alert(`el perimetro del rectagulo es : ${Perimetro1}`)

    }
             
    function Superficie(){
        let Superficie1 = parseInt(parseInt(Base) * parseInt(Altura))
        alert(`la superficie del rectagulo es : ${Superficie1}`) 
           
        }
    
    return (
        <>
            <input type="number" value={Base} onChange={(e)=> setBase(e.target.value)}/>
            <input type="number" value={Altura} onChange={(e)=> setAltura(e.target.value)}/>
            <button onClick={Perimetro}>mostrar perimetro</button>
            <button onClick={Superficie}>mostrar superficie</button>
            
        </>
    );
    }
    
    
