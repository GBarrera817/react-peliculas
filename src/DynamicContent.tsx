export default function DynamicContent(props: DynamicContentProps){

    return (
        <div>
            {props.showContent ? <p>Mostrando el mensaje secreto</p> : <p>Ocultando el mensaje</p>}
        </div>
    )
}

interface DynamicContentProps {
    showContent: boolean;
}