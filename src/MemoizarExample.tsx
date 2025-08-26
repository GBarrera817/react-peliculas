import { useMemo, useState } from "react";

export default function MemoizarExample() {

    const [number, setNumber] = useState(1);
    const [name, setName] = useState('');

    const factorial = useMemo(() => {
        console.log('Calculando factorial');

        let result = 1;

        for (let i=1; i<= number; i++){
            result = result * i;
        }

        return result;
    }, [number]); // useMemo recibe como parámetro la funcion a la cual se quiere memoizar y un listado de dependencias

    return (
        <>
            <p>Calcular el factorial de <input type="number" onChange={e => setNumber(Number(e.target.value))} /></p>
            <p>El factorial {number} es: {factorial} </p>

            <p>Nombre: <input type="text" onChange={e => setName(e.target.value)}/></p>

            <p>Hola, {name}</p>
        </>
    )

}