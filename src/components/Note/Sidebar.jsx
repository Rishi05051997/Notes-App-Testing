import { Icon } from "@iconify/react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider";
import { useData } from "../../context/DataProvider";
import { logOutUser } from "../../services";
import { AddNote } from "./AddNote";
export const Sidebar = ({ login }) => {
    const { state: { isModelOpen }, dispatch, isExpanded, setIsExpanded } = useData();
    const navigate = useNavigate();
    const { setLogin } = useAuth();
    console.log(isModelOpen)

    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem("sidebar-collasped");
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem("sidebar-collasped");
    }

    return login && (
        <>
            <div className="wrapper">
                <div className={isExpanded ? "sidebar" : "sidebar collapsed"}>
                    <header className="sidebar-header">
                        <div className="sidebar-icon text-4">
                            <Icon className="iconify highlightMainText" onClick={handleToggler} icon="carbon:menu" />
                        </div>
                        <h1 className="sidebar-logo head-1 highlightMainText">NOTE APP</h1>
                        <nav className="siderbar-navigation">
                            <button className="btn btn-primary" onClick={() => dispatch({ type: "TOGGLE-MODDAL" })}>Create Note</button>
                            <div className="badge-div highlightMainText">
                                <Icon className="iconify" icon="healthicons:ui-user-profile" />
                                <div className="text-2">User Name</div>
                            </div>
                        </nav>
                    </header>
                    <main className="sidebar-items">
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" onClick={handleToggler} icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3">Notes</span>
                        </div>
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" onClick={handleToggler} icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3"><Link to="/add-note">Add Notes</Link></span>
                        </div>
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" onClick={handleToggler} icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3">Archive Notes</span>
                        </div>
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" onClick={handleToggler} icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3">Trash Notes</span>
                        </div>
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3" onClick={() => logOutUser(setLogin, navigate)}>Logout</span>
                        </div>
                    </main>
                </div>
                <section className={isExpanded ? "note-main-content" : "note-main-content-collasped"}>
                    <header className="content-header">
                        <div className="sort-by-field" >
                            <label htmlFor="sortBy" className="head-3">Sort By</label>
                            <select name="" id="" className="head-3">
                                <option value="">Newest</option>
                                <option value="">Oldest</option>
                            </select>
                        </div>
                        <nav className="content-nav text-3 bold">
                            <div>Priority</div>
                            <div className="priority-round cursor_">High</div>
                            <div className="priority-round cursor_">Medium</div>
                            <div className="priority-round cursor_">Low</div>
                        </nav>
                    </header>
                </section>

            </div>
            {
                isModelOpen && <AddNote />
            }
        </>
    )
}