import { useState } from "react";

export default function Contador() {
    const [cuenta, setcuenta] = useState(0);
    

    const incrementar = () => {
        console.log("usuario hiso click");
        setcuenta(cuenta + 1);
    };
    
    return (
        <>
            <p>{cuenta}</p>
            <button onClick={incrementar}>incrementar</button>
            <button onClick={()=> setcuenta(cuenta - 1)}>decremetar</button>
        </>
    );
}