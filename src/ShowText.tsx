export default function ShowText(props: ShowTextProps) {
    return (
        <div>
            <p>Haz escrito: {props.texto}</p>
        </div>
    );
}

// Cada componente que tenga parametros, va a definir una interfaz con la siguiente convencion de nombre
// AppNameProps 

interface ShowTextProps {
    texto: string;
}