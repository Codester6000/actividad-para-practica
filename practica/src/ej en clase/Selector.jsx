import { useState } from "react";

export default function Color() {
    const [Colorl, setColorl] = useState("black");
    const [Colorf, setColorf] = useState("black");


    return (
       <>

        <p style={{color:Colorl, backgroundColor:Colorf }}>un texto</p>
        <div>
            <label >color texto</label>
            <select name="color texto" id="colort" onChange={(e)=> setColorl(e.target.value)}>
                <option value="red">rojo</option>
                <option value="blue">azul</option>
                <option value="green">verde</option>
                <option value="black">negro</option>
            </select>

          </div>
        <div>
            <label > color fondo</label>
            <select name="color fondo" id="colorf" onChange={(e)=> setColorf(e.target.value)}>
                <option value="red">rojo</option>
                <option value="blue">azul</option>
                <option value="green">verde</option>
                <option value="black">negro</option>
            </select>

        </div>
        </>
    
    )
}