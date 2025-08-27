import { NavLink } from "react-router";
import Button from "../../../components/Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

export default function GenreCreate() {

    // register: connect interface prop, for example, name, with the proper input   
    // handleSubmit: for handle the submit of the form
    // validationRules object is a parameter of useForm
    // isSubmitting: true when form is submitting and false when end submission
    const {
        register, 
        handleSubmit,
        formState: {errors, isValid, isSubmitting},
    } = useForm<FormType>({
        resolver: yupResolver(validationRules),
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<FormType> = async (data) => {
        
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
    };

    return (
        <>
            <h3>Create genre</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
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

interface FormType {
    name: string;
}

// Form Validation
const validationRules = yup.object({

    name: yup.string().required('Name is required')
});