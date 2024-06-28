import { useState } from "react";


export default function Numero() {
    const [Numero, setNumero] = useState(0);
    
    
    
    
    return (
        <>
            <input type="number" value={Numero} onChange={(e)=> setNumero(e.target.value)}/>
            <Signo Numero= {Numero}/>
            <Paridad Numero= {Numero}/>
            <Multiplo Numero= {Numero}/>
            <Capicua Numero= {Numero}/>
        </>
    );
}

function Signo({Numero}){
    return(
        <>
            {Numero>0 && <p>ES positivo</p>}
            {Numero<0 && <p>ES negativo</p>}
            {Numero===0 && <p>ES cero</p>}
        </>
    )
}

function Paridad(props) {
    return(
        <>
            {props.Numero%2===0 && <p>Es par</p>}
            {Math.abs(props.Numero % 2) ===1 && <p>Es impar</p>}
        </>
    )
}

function Multiplo(props) {
    return (
        
        props.Numero % 7===0 ? (
            
            <p>Es Multiplo de 7</p>
        ) : (
            <p> No es Multiplo de 7</p>
        )
        
    )
}

function Capicua({Numero}){
    const numeroInvertido = parseInt(Numero.toString().split("").reverse().join("")
    )
    return Numero == numeroInvertido ? (<p>Es Capicua </p>) : (<p>No es Capicua</p>);

}