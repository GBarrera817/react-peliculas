import MovieList from "./features/movies/components/MovieList";
import type Movie from "./features/movies/models/movie.model";

export default function App() {

  // const movie: Movie = {
  //   id: 1,
  //   title: 'Sonic 3',
  //   poster: 'https://static.wikia.nocookie.net/a4aa97bb-de0c-4aab-a16c-4ab4fb1116c8'
  // }

  // Features movies (en cartelera o en cines)
  const nowPlaying: Movie[] = [
    {
    id: 1,
    title: 'Sonic 3',
    poster: 'https://static.wikia.nocookie.net/a4aa97bb-de0c-4aab-a16c-4ab4fb1116c8'
    },
    {
      id: 2,
      title: 'Mortal Kombat',
      poster: 'https://cdn.justjared.com/wp-content/uploads/2021/04/mortal-cast/mortal-kombat-movie-photos-32.jpg'
    }
  ]
  const commingSoon: Movie[] = [
  {
    id: 3,
    title: 'The Long Walk',
    poster: 'https://www.cinemark.com/media/gxfj1p52/medthelongwalkposter.jpg'
  },
  {
    id: 4,
    title: 'Dude Perfect: The Hero Tour',
    poster: 'https://www.cinemark.com/media/gwwery0h/meddudeperfectposter.jpg'
  }
]

  return(
    <>
      <h3>Now Playing</h3>
      <MovieList movies={nowPlaying} />

      <h3>Comming Soon</h3>
      <MovieList movies={commingSoon} />

    </>
  )
}