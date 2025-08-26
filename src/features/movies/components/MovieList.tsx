import type Movie from "../models/movie.model";
import IndividualMovie from "./IndividualMovie";
import styles from "./MovieList.module.css";

export default function MovieList(props: MovieListProps) {
  if (!props.movies) {
    return "Now loading...";
  } else if (props.movies.length === 0) {
    return "No available movies to show";
  } else {
    return (
      <div className={styles.div}>
        {props.movies.map((movie) => (
          <IndividualMovie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

interface MovieListProps {
  movies?: Movie[];
}
