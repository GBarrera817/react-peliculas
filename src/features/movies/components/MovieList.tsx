import type Movie from "../models/movie.model";
import GenericList from "./GenericList";

import IndividualMovie from "./IndividualMovie";
import styles from "./MovieList.module.css";

export default function MovieList(props: MovieListProps) {
  
    return (
        <GenericList<Movie> list={props.movies} emtpyListUI={
            <>There's no movies to show.</>
        }>
            <div className={styles.div}>
                {props.movies?.map((movie) => (
                <IndividualMovie key={movie.id} movie={movie} />
                ))}
            </div>
        </GenericList>
    );
}

interface MovieListProps {
  movies?: Movie[];
}
