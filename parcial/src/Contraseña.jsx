import { useState } from "react";


export default function ContraseñaP () {  
    const [Contraseña, setContraseña] = useState("")
    const [ConContraseña, setConContraseña] = useState("")
    const [Mensaje,setMensaje] = useState("")
    const [Colorm,setColorM] = useState("black")
    
    const Confirmar = (e) =>{
        if (ConContraseña == "" && Contraseña == "") {
            setMensaje("La contraseña son olbligatoria")
            setColorM("red")
        } else if (Contraseña.includes("@","!","$","%","&","#" )&& 
        ConContraseña.includes("@","!","$","%","&","#" ) && 
        Contraseña.includes("1","2","3","4","5","6","7","8","9" ) && 
        ConContraseña.includes("1","2","3","4","5","6","7","8","9" ) && 
        Contraseña.trim() === "" && ConContraseña.trim() === "" &&
        Contraseña === ConContraseña && 
        ConContraseña == "" && Contraseña == "" &&
        Contraseña.length>7) {
            setMensaje("Todos los datos son correctos.")
            setColorM("green")
        } else {
            setMensaje("La contraseña son olbligatoria y tiene que tener signos numeros tiene que ser iguales ")
            setColorM("red")
        }
        e.preventDefault()
        
    }



    return(
        <>
            <form  onSubmit={(e) => (e.preventDefault())}>
                <input type="text" value={Contraseña} onChange={(e) => setContraseña(e.target.value)}/>
                <input type="text" value={ConContraseña} onChange={(e) => setConContraseña(e.target.value)}/>
                <button type="submit" onClick={Confirmar}>Confirmar</button>
                <div id="divMensaje">
                    <p style={{color:Colorm}} >{Mensaje}</p>
                </div>
            </form>
        
        
        </>
    )
}