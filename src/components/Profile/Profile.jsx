import { useData } from "../../context/DataProvider";
import { Sidebar } from "../Layout";
import { useAuth } from "../../context/AuthProvider";
import "./Profile.css"
import { useNavigate } from "react-router-dom";
export const Profile = () => {
    const { isExpanded, } = useData();
    const { setAuth } = useAuth();
    const isAuth = localStorage.getItem("isAuth");
    const { firstName, lastName, email } = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const logoutUser = () => {
        setAuth({
            isAuth: false,
            token: '',
            user: {}
        });
        localStorage.clear();
        navigate('/');
    }
    return (
        <>
            <Sidebar login={isAuth} />
            <div className={isExpanded ? "note-main-content" : "note-main-content-collasped"}>
                <div className="note-content">
                    <header>
                        <div className="highlightMainText head-1 notes-header">User Details</div>
                    </header>
                    <div className="note-listing">
                        <section className="profile-content">
                            <div className="text-4 mar-y-3">Name: <span className="bold">{firstName}{lastName}</span></div>
                            <div className="text-4 mar-y-3">Email: <span className="bold">{email}</span></div>
                            <div className="mar-y-3">
                                <button className="btn btn-danger head-3" onClick={() => logoutUser()}>Logout</button>
                            </div>

                        </section>

                    </div>
                </div>
            </div>
        </>
    );
}