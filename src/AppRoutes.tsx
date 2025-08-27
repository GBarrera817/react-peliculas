import { Route, Routes } from "react-router";
import LandingPage from "./features/home/components/LandingPage";
import GenresIndex from "./features/genres/components/GenresIndex";
import GenreCreate from "./features/genres/components/GenreCreate";
import GenreEdit from "./features/genres/components/GenreEdit";
import ActorsIndex from "./features/actors/components/ActorsIndex";
import ActorCreate from "./features/actors/components/ActorCreate";
import ActorEdit from "./features/actors/components/ActorEdit";
import CinemaIndex from "./features/cinemas/components/CinemasIndex";
import CinemaCreate from "./features/cinemas/components/CinemaCreate";
import CinemaEdit from "./features/cinemas/components/CinemaEdit";
import MovieCreate from "./features/movies/components/MovieCreate";
import MovieEdit from "./features/movies/components/MovieEdit";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>

                <Route path="/genres" element={<GenresIndex/>}/>
                <Route path="/genres/create" element={<GenreCreate/>}/>
                <Route path="/genres/edit/:id" element={<GenreEdit/>}/>
            
                <Route path="/actors" element={<ActorsIndex/>}/>
                <Route path="/actors/create" element={<ActorCreate/>}/>
                <Route path="/actors/edit/:id" element={<ActorEdit/>}/>

                <Route path="/cinemas" element={<CinemaIndex/>}/>
                <Route path="/cinemas/create" element={<CinemaCreate/>}/>
                <Route path="/cinemas/edit/:id" element={<CinemaEdit/>}/>

                <Route path="/movies/create" element={<MovieCreate/>}/>
                <Route path="/movies/edit/:id" element={<MovieEdit/>}/>
            </Routes>
        </>
    );
}