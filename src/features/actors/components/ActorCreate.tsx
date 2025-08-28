import type { SubmitHandler } from "react-hook-form";
import ActorForm from "./ActorForm";
import type ActorCreate from "../models/ActorCreate.model";

const onSubmit: SubmitHandler<ActorCreate> = async (data) => {

    console.log('Creating actor ...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
}

export default function ActorCreate() { 

    return (
        <>
            <h3>Create Actor</h3>
            <ActorForm onSubmit={onSubmit}/>
        </>
    );
}