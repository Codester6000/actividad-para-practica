import { useState } from "react";

export default function Arreglo() {
    const [Personas, ] = useState(["pepe","maria","juan","pedro","cacho"]);
    

    return (
       <>
            <h1>listado de persona</h1>
            
            <ol>
                {Personas.map((Persona, index) => {
                    return <li key={index}>{Persona},{index}</li>
                    
                    })}
            </ol>

        
       </>
    
    )
}