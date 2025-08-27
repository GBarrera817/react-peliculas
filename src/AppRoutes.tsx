import { Route, Routes } from "react-router";
import LandingPage from "./features/home/components/LandingPage";
import GenresIndex from "./features/genres/components/GenresIndex";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/genres" element={<GenresIndex/>}/>
            </Routes>
        </>
    );
}