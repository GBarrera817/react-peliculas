export default function ProjectContent2(props: ProjectContent2Props) {
    return (
        <>
            {props.parteSuperior}
            <hr/>
            {props.parteIntermedia}
            <hr/>
            {props.parteInferior}
        </>
    );
}

interface ProjectContent2Props {
    parteSuperior: React.ReactNode; // ReactNode representa contenido arbitrario: Texto, botones, imagenes, etc
    parteIntermedia: React.ReactNode; // ReactNode representa contenido arbitrario: Texto, botones, imagenes, etc
    parteInferior: React.ReactNode; // ReactNode representa contenido arbitrario: Texto, botones, imagenes, etc
}