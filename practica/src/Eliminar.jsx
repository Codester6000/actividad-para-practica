import { useState } from "react";

export default function Eliminar() {
    const [Personas, setPersonas ] = useState ([{'Nombre':'Joel','Apellido':'Moyano','Edad':'25'},
    {'Nombre':'Juan','Apellido':'Perez','Edad':'20'},{'Nombre':'Pablo','Apellido':'Oliva','Edad':'23'}])
    const [Nombre,setNombre] = useState("")
    const [Apellido,setApellido] = useState("")
    const [Edad,setEdad] = useState(0)
    function agregar(){
        if (Nombre.trim() === ""){
            alert("no se puede ingresar Nombre en blanco")
        }else if (Apellido.trim() === ""){
            alert("no se puede ingresar apellido en blanco")
        }else if (Edad.trim() === ""){
            alert(`no se puede ingresar edad en blaco`)
        }else{
            const nuevo = {Nombre,Apellido,Edad}
            setPersonas([...Personas,nuevo])
            setNombre("")
            setApellido("")
            setEdad("")

        }

    }

    function quitar(index){
        if (confirm(` desea quitar ${Personas[index]}?`)){
            setPersonas(Personas.filter((_, p)=> p !== index));
        }
    }




    return(
        <>  <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="text" value={Apellido} onChange={(e) => setApellido(e.target.value)} />
            <input type="number" value={Edad} onChange={(e) => setEdad(e.target.value)} />
            <button onClick={agregar}>Ingresar</button>
            <ol>{Personas.map((Persona, index)=>(
                <li key={index}>{Persona.Nombre} {Persona.Apellido} {Persona.Edad}  <button onClick={() =>quitar(index)}>x</button></li>
            ))}

            </ol>
            
        
        </>
    )
}