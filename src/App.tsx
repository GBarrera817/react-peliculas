import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./components/Menu";
import AppRoutes from "./AppRoutes";

export default function App() {

  return(
    <>
      <BrowserRouter>
        <Menu/>
        <div className="container">
          <AppRoutes/>
        </div>
      </BrowserRouter>
    </>
  )
}

