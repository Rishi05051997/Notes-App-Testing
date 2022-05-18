import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./../components/Auth";
import { LandingPage } from "./../components/Landing/LandingPage";
import { AddNote, Home } from "./../components/Note";
export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={< LandingPage />} />
            <Route path="/login" element={< Login />} />
            <Route path="/signup" element={< Signup />} />
            <Route path="/note" element={< Home />} />
            <Route path="/add-note" element={< AddNote />} />
        </Routes>
    )
}