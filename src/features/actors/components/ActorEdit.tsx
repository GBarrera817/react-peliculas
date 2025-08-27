import { useParams } from "react-router";

export default function ActorEdit() {

    // New hook useParams: allow to receive the URL params
    const {id} = useParams();

    return (
        <>
            <h3>Edit Actor</h3>
            <p>El id es {id}</p>
        </>
    );
}