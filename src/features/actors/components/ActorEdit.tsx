import { useParams } from "react-router";
import type ActorCreate from "../models/ActorCreate.model";
import { useEffect, useState } from "react";
import ActorForm from "./ActorForm";
import Loading from "../../../components/Loading";
import type { SubmitHandler } from "react-hook-form";

export default function ActorEdit() {

    // New hook useParams: allow to receive the URL params
    const {id} = useParams();

    const [model, setModel] = useState<ActorCreate | undefined>(undefined);

    useEffect(() => {

        const timerId = setTimeout(() => {
            setModel({name: 'Tom ' + id, dateBirth: '2022-11-23'})
        }, 1000);

        return () => clearTimeout(timerId);
    }, [id])

    const onSubmit: SubmitHandler<ActorCreate> = async (data) => {
    
        console.log('Editing actor ...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <>
            <h3>Edit Actor</h3>
            {model ? <ActorForm model={model} onSubmit={onSubmit}/> : <Loading/>}
        </>
    );
}