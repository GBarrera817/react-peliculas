import { useEffect, useState } from "react";
import MovieList from "./features/movies/components/MovieList";
import type Movie from "./features/movies/models/movie.model";
import Button from "./features/movies/components/button";

export default function App() {

  // const movie: Movie = {
  //   id: 1,
  //   title: 'Sonic 3',
  //   poster: 'https://static.wikia.nocookie.net/a4aa97bb-de0c-4aab-a16c-4ab4fb1116c8'
  // }

  // Fake WEB API consuming 

  const [movies, setMovies] = useState<AppState>({});

  useEffect(() => {
    setTimeout(() => {
      // Now Playing (en cartelera o en cines)
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
      ];

      // Comming Soon (próximos estrenos)
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
      ];

      // Just for test
      // const commingSoon: Movie[] = [];

      setMovies( { nowPlaying, commingSoon});

    }, 1000)
  }, []);



  return(
    <>
    <div className="container">
      <Button>Mi boton de prueba</Button>
      <h3>Now Playing</h3>
      <MovieList movies={movies.nowPlaying} />

      <h3>Comming Soon</h3>
      <MovieList movies={movies.commingSoon} />
    </div>

    </>
  )
}

interface AppState {
  // The ? means optional, at the begin of the execution it will be null
  nowPlaying?: Movie[];  
  commingSoon?: Movie[];
}