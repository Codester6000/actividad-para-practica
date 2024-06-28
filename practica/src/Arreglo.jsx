import { useState } from "react";  

export default function Arreglos (){
    const [Personas, ] = useState(["lucas", "joel", "ramon","isma","agustin"])

    return(
        <>      <h1>listado de persona</h1>

                <ol>{Personas.map((Persona, index)=>{
                    return <li key={index} >{Persona}</li>
                }
                
                )}

                </ol>
        
        </>
    )
}