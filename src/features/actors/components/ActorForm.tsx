import { useForm, type SubmitHandler } from "react-hook-form";
import type ActorCreate from "../models/ActorCreate.model";
import Button from "../../../components/Button";
import { NavLink } from "react-router";

export default function ActorForm(props: ActorFormProps) {

    const {
        register,
        handleSubmit,
        formState: {errors, isValid, isSubmitting}
    } = useForm<ActorCreate>({
        defaultValues: props.model ?? { name: ''}
    });

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" autoComplete="off" className="form-control" {...register('name')}/>
                { errors.name && <p className="error">{errors.name.message}</p>}
            </div>
             <div className="form-group">
                <label htmlFor="dateBirth">Date birth</label>
                <input type="date" id="dateBirth" autoComplete="off" className="form-control" {...register('dateBirth')}/>
                { errors.dateBirth && <p className="error">{errors.dateBirth.message}</p>}
            </div>
            <div className="mt-2">
                <Button 
                    type="submit" 
                    disabled={!isValid || isSubmitting<>}>{isSubmitting ? 'Sending...' : 'Send'}
                </Button>
                <NavLink className="btn btn-secondary ms-2" to="/actors">Cancel</NavLink>
            </div>
        </form>
    );
}

interface ActorFormProps {
    model?: ActorCreate;
    onSubmit: SubmitHandler<ActorCreate>;
}