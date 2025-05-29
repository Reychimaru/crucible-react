import {useState} from 'react';
import {Link} from "react-router-dom";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const isEmailWrong = false
    const isPasswordWrong = false

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="centerWrapper">
            <article className="microContainer">
                <h1 className="containerTitle">Crucible</h1>
                <h3>Login</h3>
                <form className="flexColumn">
                    <label htmlFor="email" className="flexRowSB">
                        <span>Email</span>
                        {isEmailWrong ? <span className="labelError">Email not found</span> : <span className="labelPlaceholder"></span>}
                    </label>
                    <input name="email" type="email"
                           className={isEmailWrong ? "inputError" : ""}
                           placeholder="Enter your email"/>

                    <label htmlFor="password" className="flexRowSB">
                        <span>Password</span>
                        {isPasswordWrong ? <span className="labelError">Password is wrong</span> : <span className="labelPlaceholder"></span>}
                    </label>
                    <div className="flexRow fullWidth">
                        <input
                            name="password"
                            className={`inputWithButton ${isPasswordWrong ? "inputError" : ""}`}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            className="buttonWithInput"
                            onClick={togglePasswordVisibility}
                            aria-label="Toggle password visibility"
                        >
                            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                        </button>
                    </div>

                    <div className="flexRow buttonContainer">
                        <Link to={`/recover`} className="flexRow fullWidth">
                            <button type="button" className="buttonText">Recover</button>
                        </Link>
                        <button type="submit" className="buttonText">Login</button>
                    </div>
                </form>
            </article>

            <div className="spacer"></div>

            <article className="microContainer">
                <h3>New user?</h3>
                <Link to={`/register`} className="flexRow fullWidth">
                    <button type="button" className="buttonText">Create Account</button>
                </Link>
            </article>
        </div>
    );
}
