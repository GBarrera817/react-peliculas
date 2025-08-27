import { useNavigate } from "react-router";
import Button from "../../../components/Button";

export default function CinemaIndex() {

    // New hook: useNavigate: allow redirect
    const navigate = useNavigate();
    
    return (
        <>
            <h3>Cinemas</h3>
            <Button onClick={() => navigate('/cinemas/create')}>Create cinema</Button>
        </>
    );
}