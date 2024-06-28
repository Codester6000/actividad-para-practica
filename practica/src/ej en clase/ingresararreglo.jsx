import { useState } from "react";

export default function Arreglo() {
    const [Personas, setPersonas ] = useState(["pepe","maria","juan","pedro","cacho"]);
    const [Nombre, setNombre] = useState("")
    const handleagregar = (e) =>{
        if (Nombre.trim() === ""){
            alert("no se puede agregar nombre vacio")
        } else{
            setPersonas([...Personas, Nombre])

        }
        e.preventDefault()
    }
    const handlequitar = (Persona)=> {
        if (confirm(` desea quitar ${Persona}?`)){
            setPersonas([Personas.filter((p)=> p !== Persona)]);
        }
    }
    const handlequitarporindex=(index)=>{
        if (confirm(` desea quitar ${Personas[index]}?`)){
            const nuevasPersonas = ([...Personas]);
            nuevasPersonas.splice(index, 1);
            setPersonas(nuevasPersonas)
        }
    }
    const handlequitarporindex2 = (index)=> {
        if (confirm(` desea quitar ${Personas[index]}?`)){
            setPersonas(Personas.filter((_,p)=> p !== index));
        }
    }
    return (
       <>
            <h1>listado de persona</h1>
            <form onSubmit={handleagregar}>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id="nombre" value={Nombre} required onChange={(e)=> setNombre(e.target.value)} />
                <button type="submit" disabled={!Nombre.trim() === ""} >agregar</button>

            </form>
            <ol>
                {Personas.map((Persona, index) => (
                    <li key={index}>
                        {Persona} <button onClick={()=> handlequitar(Persona)}>x</button></li>
                    
                    ))}
            </ol>

        
       </>
    
    )
}