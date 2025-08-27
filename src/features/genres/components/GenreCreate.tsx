import type CreateGenre from "../models/CreateGenre.model";
import type { SubmitHandler } from "react-hook-form";
import GenreForm from "./GenreForm";

export default function GenreCreate() {

    const onSubmit: SubmitHandler<CreateGenre> = async (data) => {
        console.log('Creating genre ...');
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
    };

    return (
        <>
            <h3>Create genre</h3>
            <GenreForm onSubmit={onSubmit}/>
        </>
    );
}