import { useAuth } from "../../context/AuthProvider"
import { loginUser } from "../../services";
import { RotatingSquare } from "react-loader-spinner";
import { useNavigate } from "react-router-dom"
// import { useState } from "react";

export const Login = () => {
    const navigate = useNavigate();
    // const initalLoginCreds = {
    //     email: '',
    //     password: ''
    // }
    const { userState: { email, password }, userDispatch, loader, setLogin, showMsg, errorMsg } = useAuth();
    // const [loginCreds, setLoginCreds] = useState(initalLoginCreds);
    const loginFormHandler = async (e, loginCreds) => {
        e.preventDefault();
        debugger;
        // loginUser(email, password, navigate)
        // setLoginCreds((cred) => ({
        //     ...cred,
        //     email: email,
        //     password: password
        // }))
        try {
            const isLogin = await loginUser(loginCreds);

            if (isLogin) {
                // showToast('Login successful!', 'success');
                const { encodedToken, foundUser } = isLogin;
                if (foundUser && encodedToken) {
                    localStorage.setItem("token", encodedToken)
                    setLogin(foundUser);
                    localStorage.setItem("login", JSON.stringify(foundUser));
                    userDispatch({ type: "CLEAR" });
                    navigate("/note")

                }
                // setTimeout(() => {
                //     setLoginCreds(initalLoginCreds);
                //     navigate("/note")
                // }, 1000)
            }
            else {
                throw new Error("Failure! Login failed.");
            }

        } catch (error) {
            console.log(error.message);
        }
    }
    // const testLoginCreds = {
    //     email: "v@gmail.com",
    //     password: "Vrushabh123"
    // };

    const testLoginFormHandler = async (e) => {
        e.preventDefault();

        userDispatch({ type: "SET-EMAIL", payload: "v@gmail.com" });
        userDispatch({ type: "SET-PASSWORD", payload: "Vrushabh123" });

        loginFormHandler(e, { email, password })
    }

    return loader ? (
        <div className="loader-container">
            <RotatingSquare ariaLabel="rotating-square" visible={true} color="#3b82f6" />
        </div>

    ) : (
        <section className="form-section">
            <form onSubmit={(e) => loginFormHandler(e, { email, password })} className="form container-card xxl-card-width pad-lg">
                <div className="head-2 highlightMainText bold">Login</div>
                <div className="custom-input-one mar-y-4 login-input">
                    <input
                        id="email"
                        type="email"
                        className="input-field"
                        autoComplete="off"
                        placeholder=" "
                        value={email}
                        onChange={(e) => userDispatch({ type: "SET-EMAIL", payload: e.target.value })}
                    />
                    <label htmlFor="email" className="input-label text-2"
                    >Enter Your Email Id Here</label
                    >
                </div>
                <div className="custom-input-one mar-y-2 login-input">
                    <input
                        id="password"
                        type="password"
                        className="input-field"
                        autoComplete="off"
                        placeholder=" "
                        value={password}
                        onChange={(e) => userDispatch({ type: "SET-PASSWORD", payload: e.target.value })}
                    />
                    <span
                        className="iconify icons text-2"
                        data-icon="akar-icons:eye-slashed"
                    ></span>
                    <label htmlFor="password" className="input-label text-2"
                    >Enter Your Password Here</label
                    >
                </div>
                <div className="mar-y-3">
                    <button className="btn btn-primary form-btn text-2 bold">
                        Login
                    </button>
                </div>
                <div className="mar-y-2 head-4">
                    {showMsg && <p className="highlightMainText">{errorMsg}</p>}
                </div>
                <div className="mar-y-3">
                    <span className="btn btn-link head-4" onClick={(e) => testLoginFormHandler(e)}>Add Test Credentials</span>
                </div>
                <div className="text-2 mar-y-2">
                    Forgot Your Password ?
                    <span className="bold cursor_"
                    ><a href="./changePassword.html">Reset Here</a></span
                    >
                </div>
                <div className="text-2 mar-y-2">
                    Not a User yet ?
                    <span className="bold cursor_"
                    ><a href="./signUp.html">Create Your Account</a></span
                    >
                </div>
            </form >
        </section >
    )
} 