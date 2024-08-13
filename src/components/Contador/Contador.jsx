
import { useState } from "react"

export const Contador = () => {
    const [contador, setContador] = useState(0)
    return <>
        <button onClick={()=>{
            setContador(contador + 1)
        }} >1+</button>

        <h2>{contador}</h2>

        <button onClick={()=>{
            setContador(contador - 1)
        }} >1-</button>
    </>
}