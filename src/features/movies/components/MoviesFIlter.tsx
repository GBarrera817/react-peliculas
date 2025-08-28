import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../../components/Button";
import type Genre from "../../genres/models/Genre.model";

export default function MoviesFilter() {

    const defaultValues: FormType = {
        title: '',
        genreId: 0,
        commingSoon: false,
        nowPlaying: false
    }; 

    const {register, handleSubmit, reset, formState:{isSubmitting}} = useForm<FormType>({
        defaultValues: defaultValues
    }); 

    const genres: Genre[] = [
        { id: 1, name: 'Comedy'},
        { id: 2, name: 'Action'}
    ];

    // data is the information filled through the form controls 
    const onSubmit:SubmitHandler<FormType> = async (data) => {
        console.log('Filtering...');

        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
    };

    return(
        <>
            <h3>Movies filter</h3>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <input type="text" id="title" placeholder="Insert movie title..." autoComplete="off" className="form-control" {...register('title')}/>
                </div>
                <div className="col-12">
                    <select name="genreList" id="" className="form-select">
                        <option value="0">-- Select a genre --</option>
                        {/* Siempre colocar un key cuando se trabaje con select */}
                        {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                    </select>
                </div>
                <div className="col-12">
                    <div className="form-check" {...register('genreId')}>
                        <input type="checkbox" className="form-check-input" id="commingSoon" {...register('genreId')}/>
                        <label htmlFor="commingSoon">Comming soon</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="nowPlaying" {...register('nowPlaying')}/>
                        <label htmlFor="nowPlaying">Now Playing</label>
                    </div>
                </div>
                <div className="col-12">
                    <Button disabled={isSubmitting} type="submit">{isSubmitting ? 'Filtering ...' : 'Filter'}</Button>
                    <Button onClick={() => reset()} type="reset" className="btn btn-danger ms-2">Reset</Button>
                </div>
            </form>
        </>
    );
}

interface FormType {
    title: string;
    genreId: number;
    commingSoon: boolean;
    nowPlaying: boolean;
}
