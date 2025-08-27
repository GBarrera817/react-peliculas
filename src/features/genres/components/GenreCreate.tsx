import { NavLink } from "react-router";
import Button from "../../../components/Button";
import { useForm, type SubmitHandler } from "react-hook-form";

export default function GenreCreate() {

    // register: connect interface prop, for example, name, with the proper input   
    // handleSubmit: for handle the submit of the form
    const {register, handleSubmit} = useForm<FormType>();

    const onSubmit: SubmitHandler<FormType> = (data) => {
        console.log(data);
    };

    return (
        <>
            <h3>Create genre</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" autoComplete="off" className="form-control" {...register('name')}/>
                </div>
                <div className="mt-2">
                    <Button type="submit">Send</Button>
                    <NavLink to="/genres" className="btn btn-secondary ms-2">Cancel</NavLink>
                </div>
            </form>
        </>
    );
}

interface FormType {
    name: string;
}
