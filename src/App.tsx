import IndividualMovie from "./features/movies/components/IndividualMovie";
import type Movie from "./features/movies/models/movie.model";

export default function App() {

  const movie: Movie = {
    id: 1,
    title: 'Sonic 3',
    poster: 'https://static.wikia.nocookie.net/a4aa97bb-de0c-4aab-a16c-4ab4fb1116c8'
  }

  return(
    <>
      <IndividualMovie movie={movie} />
    </>
  )
}