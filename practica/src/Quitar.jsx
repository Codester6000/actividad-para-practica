import { useState } from "react";  

export default function Quitar1 (){
    const [Personas, setPersonas] = useState(["lucas", "joel", "ramon","isma","agustin"])
    const [Nombre, setNombre] = useState("")
    const Agregar = (e)=> {
        if (Nombre.trim() === ""){
            alert("no se puede agregar nombre vacio")
        } else{
            setPersonas([...Personas, Nombre])

        }
        e.preventDefault()
    }
    
    
    function quitar (index){
        if (confirm(` desea quitar ${Personas[index]}?`)){
            setPersonas(Personas.filter((_, p)=> p !== index));
        }
    }

    return(
        <>
                <form onSubmit={Agregar}>
                    <label >Ingrese un nombre para agregar a la lista</label>
                    <input type="text" value={Nombre}  onChange={(e)=> setNombre(e.target.value)}/>
                    <button type="submit">Agrgar a la lista</button>

                </form>
                <h1>listado de persona</h1>

                <ol>{Personas.map((Persona, index)=>(
                     <li key={index} >{Persona} <button onClick={()=>quitar(index)}>quitar</button></li>
                ))}

                </ol>
        
        </>
    )
}