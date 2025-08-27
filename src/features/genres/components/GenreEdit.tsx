import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateGenre from "../models/CreateGenre.model";
import GenreForm from "./GenreForm";
import type { SubmitHandler } from "react-hook-form";
import Loading from "../../../components/Loading";

export default function GenreEdit() {

    // New hook useParams: allow to receive the URL params
    const {id} = useParams();
    const [model, setModel] = useState<CreateGenre | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {

            setModel({name: 'Drama ' + id})
        },1000);

        // Función para limpiar el el setTimeout
        return () => clearTimeout(timerId);
    },[id]);


    const onSubmit: SubmitHandler<CreateGenre> = async (data) => {
        console.log('Editing genre ...');
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
    };

    return (
        <>
            <h3>Edit genre</h3>
            {model ? <GenreForm model={model} onSubmit={onSubmit}/> : <Loading/>}
        </>
    );
}