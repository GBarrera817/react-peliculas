import { useParams } from "react-router";

export default function GenreEdit() {

    // New hook useParams: allow to receive the URL params
    const {id} = useParams();

    return (
        <>
            <h3>Edit genre</h3>
            <p>El id es {id}</p>
        </>
    );
}