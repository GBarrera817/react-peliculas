import { useForm, type SubmitHandler } from "react-hook-form";
import type ActorCreate from "../models/ActorCreate.model";
import Button from "../../../components/Button";
import { NavLink } from "react-router";
import * as yup from "yup";
import { DatebirthCannotBeFuture, firstLetterUpper } from "../../../validations/Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import FileChooser from "../../../components/FileChooser";

export default function ActorForm(props: ActorFormProps) {

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors, isValid, isSubmitting}
    } = useForm<ActorCreate>({
        resolver: yupResolver(validationRules),
        mode: 'onChange',
        defaultValues: props.model ?? { name: ''}
    });

    const currentImageURL: string | undefined = props.model?.picture ? props.model.picture as string : undefined; 

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

            {/* Upload Image  */}
            <FileChooser label="picture" imageURL={currentImageURL} selectedImage={picture => setValue('picture', picture)}/>            

            <div className="mt-2">
                <Button 
                    type="submit" 
                    disabled={!isValid || isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}
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

// Form Validation
const validationRules = yup.object({
    name: yup.string().required('Name is required').test(firstLetterUpper()),
    dateBirth: yup.string().required('Datebirth is required').test(DatebirthCannotBeFuture())
})