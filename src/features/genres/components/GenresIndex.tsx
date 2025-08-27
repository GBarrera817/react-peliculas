import { useNavigate } from "react-router";
import Button from "../../../components/Button";

export default function GenresIndex() {

    // New hook: useNavigate: allow redirect
    const navigate = useNavigate();

    return (
        <>
            <h3>Genres</h3>
            <Button onClick={() => navigate('/genres/create')}>Create genre</Button>
        </>
    );
}