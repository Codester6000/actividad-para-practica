import { useState } from "react";

export default function Api() {
    const [Personas, setPersonas] = useState([]);
    
    const handlemostrarpersonas = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if (res.ok) {
            console.log("llegaron los datos!")
            const nuevasPersonas = await res.json()
            setPersonas(nuevasPersonas)
            
    
        } else {
            console.error("eror no llegaron los datos")
        }
    }
    

    return (
       <>
            <h1>listado de persona</h1>
            <button id="mostrar" onClick={handlemostrarpersonas}>mostrar personas</button>
            <ul id="listado">{Personas.map((persona)=> (<li key={persona.id}>{persona.id} - {persona.name} - {persona.email}</li>))}</ul>
        
       </>
    
    )
}