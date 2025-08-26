import type Movie from "../models/movie.model";
import IndividualMovie from "./IndividualMovie";
import styles from './MovieList.module.css'

export default function MovieList(props: MovieListProps) {

    return(
        <div className={styles.div}>
            {props.movies.map(movie => <IndividualMovie key={movie.id} movie={movie}/>)}
        </div>
    )
}

interface MovieListProps {
    movies: Movie[];

}