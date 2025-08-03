export default function ProjectContent(props: ProjectContentProps) {
    return (
        <>
            <h3>Parte superior</h3>
            {props.children}
            <h3>Parte inferior</h3>

        </>
    );
}

interface ProjectContentProps {
    children: React.ReactNode // ReactNode representa contenido arbitrario: Texto, botones, imagenes, etc
}