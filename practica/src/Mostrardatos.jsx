import { useState } from "react";

export default function Mostrardatos() {
    const [Personas, ] = useState (["lucas","falcon","30"])
    const [Personas1, ] = useState (["ramon","barrera","22"])
    const [Personas2, ] = useState (["joel","moyano","25"]) 





    return(
        <>
            <ol>{Personas.map((Persona, index)=>(
                <li key={index}>{Persona}</li>
            ))}

            </ol>
            <ol>
                <li>nombre:{Personas[0]}</li>
                <li>apellido:{Personas[1]}</li>
                <li>edad:{Personas[2]}</li>
            </ol>
            <ol>{Personas1.map((Persona1, index)=>(
                <li key={index}>{Persona1}</li>
            ))}

            </ol>
            <ol>{Personas2.map((Persona2, index)=>(
                <li key={index}>{Persona2}</li>
            ))}

            </ol>
        
        </>
    )
}