import { useState } from "react";

export default function Selecion (){
    const [Colorf, setColorf] = useState("black")
    const [Colorl, setColorl] = useState("black")


    return(
        <>
            <select name="colorf" id="colorf"  onChange={(e)=> setColorf(e.target.value)}>
                <option value="red">Rojo</option>
                <option value="blue">Azul</option>
                <option value="green">Verde</option>

            </select>

            <select name="colorl" id="colorl"  onChange={(e)=> setColorl(e.target.value)}>

                <option value="red">Rojo</option>
                <option value="blue">Azul</option>
                <option value="green">Verde</option>
            </select>

            <p style={{color:Colorl,backgroundColor:Colorf}}>hola</p>

        </>
    )


}