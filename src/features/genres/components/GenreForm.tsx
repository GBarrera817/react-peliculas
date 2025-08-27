import { useForm, type SubmitHandler } from "react-hook-form";
import type CreateGenre from "../models/CreateGenre.model";
import { NavLink } from "react-router";
import Button from "../../../components/Button";
import { firstLetterUpper } from "../../../validations/Validations";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function GenreForm(props: GenreFormProps) {

    // register: connect interface prop, for example, name, with the proper input   
    // handleSubmit: for handle the submit of the form
    // validationRules object is a parameter of useForm
    // isSubmitting: true when form is submitting and false when end submission
    const {
        register, 
        handleSubmit,
        formState: {errors, isValid, isSubmitting},
    } = useForm<CreateGenre>({
        resolver: yupResolver(validationRules),
        mode: 'onChange',
        defaultValues: props.model ?? {name: ''}
    });

    return (
        <>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" autoComplete="off" className="form-control" {...register('name')}/>
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>
                <div className="mt-2">
                    <Button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? 'Sending ...' : 'Send'}</Button>
                    <NavLink to="/genres" className="btn btn-secondary ms-2">Cancel</NavLink>
                </div>
            </form>
        </>
    );
}

interface GenreFormProps {
    model?: CreateGenre;
    onSubmit: SubmitHandler<CreateGenre>
}

// Form Validation
const validationRules = yup.object({
    name: yup.string().required('Name is required').test(firstLetterUpper())
});
