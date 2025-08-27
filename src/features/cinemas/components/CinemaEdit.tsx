import { useParams } from "react-router";

export default function CinemaEdit() {

    // New hook useParams: allow to receive the URL params
    const {id} = useParams();

    return (
        <>
            <h3>Edit cinema</h3>
            <p>El id es {id}</p>
        </>
    );
}