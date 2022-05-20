import { useContext, createContext, useEffect, useState } from "react";


const authContext = createContext();



const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: '',
        user: {},
        isAuth: false
    });
    const [loader, setShowLoader] = useState();
    const [showMsg, setShowMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    useEffect(() => {
        setAuth({
            token: JSON.parse(localStorage.getItem("token")),
            user: JSON.parse(localStorage.getItem("user")),
            isAuth: localStorage.getItem("isAuth")
        })
    }, []);
    return (
        <>
            <authContext.Provider value={{ auth, setAuth, loader, setShowLoader, showMsg, setShowMsg, errorMsg, setErrorMsg }}>
                {
                    children
                }
            </authContext.Provider>
        </>)
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider }