export default function DynamicContentIf(props: DynamicContentIfProps){

    if (props.grade > 90) {
        return (
            <div>
                <h3 style={{color: 'blue'}}>Excelente calificación</h3>
            </div>
        )
    }
    else  if (props.grade >= 80 && props.grade <= 90) {
        return (
            <div>
                <h3>Muy bien hecho!</h3>
            </div>
        )
    } else {
        return (
            <h3>Puedes volver a intentarlo: <button>Reintentar</button></h3>
        )
    }
}

interface DynamicContentIfProps {
    grade: number; // calificacion
}