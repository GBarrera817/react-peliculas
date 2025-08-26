import { useEffect, useState } from "react"

export default function UseEffectExample(props: UseEffectExampleProps) {
    
    const [clicks, setClicks] = useState(0);
    const [time, setTime] = useState(new Date());


    useEffect( () => {

        console.log('El componente ha cargado');

        return () => console.log('Desmontando el componente'); // Funcion que se ejecutará cuando el componente se destruya
    }, []); // el parametro de lista es una lista de dependencias, si la inicializo como vacia, la funcion se ejecutará solo 1 vez

    // Cambiando el titulo de la ventana
    useEffect( () => {

        console.log('hook del click');

        document.title = `${clicks} veces`;
    }, [clicks]); // El componente se renderizará cuando se cree el componente Y cuando la variable clicks cambie, si no cambia, no se ejecuta

    // Actualizando la hora
    useEffect( () => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return(
        <>
            <h2>Ejemplo UseEffect</h2>

            <div>
                <button onClick={() => setClicks(clicks + 1)}>Me has clickeado {clicks} veces </button>
            </div>
            <br />
            <div>
                La hora actual es {time.toTimeString()}
            </div>
        </>
    )

}

interface UseEffectExampleProps {

}