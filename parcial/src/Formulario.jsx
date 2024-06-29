import { useState } from "react";      


export default function Formulariop (){
    const [Personas, setPersonas ] = useState ([{'Nombre':'Joel','Edad':'25'},
        {'Nombre':'Juan','Edad':'20'},{'Nombre':'Pablo','Edad':'23'}])
        const [Nombre,setNombre] = useState("")
        const [Edad,setEdad] = useState(0)
        const [Mayor, setMayor] = useState("")
        const [Promediope, setPromediope] = useState(0)

        function agregar(){
            if (Nombre.trim() === ""){
                alert("no se puede ingresar Nombre en blanco")
            }else if (Edad.trim() === ""){
                alert(`no se puede ingresar edad en blaco`)
            }else{
                const nuevo = {Nombre,Edad}
                setPersonas([...Personas,nuevo])
                setNombre("")
                
                setEdad("")
    
            }
    
        }

        const filtrarUsuariosMayoresDe18 = () => {
            
            const usuariosFiltrados = Personas.filter(Persona => Persona.Edad > 18);
            usuariosFiltrados.length > 0 ? (setMayor(" Exite una persona mayor o mas")) : ( setMayor("no exite una persona mayor"));
        }
        
        const Promedioedad = () =>{
            let contador = Personas.edad
            const promedio = parseFloat(contador/Personas.length)
            setPromediope(promedio)
        }

    return(
        <>  
            <form id="formulario" onSubmit={(e) => (e.preventDefault())}>
            
            <label htmlFor='nombre'>Nombre: </label>
            <input type="text" id="nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)}></input>
            <input type="number" value={Edad} onChange={(e) => setEdad(e.target.value)} />
            <button type="submit" onClick={agregar}>Agregar</button>
            <button onClick={filtrarUsuariosMayoresDe18}>Persona mayor</button>
            <button onClick={Promedioedad}>promedio</button>
            
            <ol>{Personas.map((Persona, index)=>(
                <li key={index}>{Persona.Nombre}  {Persona.Edad}  </li>
            ))}

            </ol>
        </form>
        <span>{Mayor}</span>
        <span>el promedio de edad de la lista es de {Promediope}</span>
        
        
        </>
    )


}