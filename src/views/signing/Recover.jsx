import {useState} from 'react';
import {Link} from "react-router-dom";

export default function Recover() {
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
                <h3>Recover password</h3>
                <form className="flexColumn">
                    <label htmlFor="email" className="flexRowSB">
                        <span>Email</span>
                        {isEmailWrong ? <span className="labelError">Email not found</span> : <span className="labelPlaceholder"></span>}
                    </label>
                    <input name="email" type="email"
                           className={isEmailWrong ? "inputError" : ""}
                           placeholder="Enter your email"/>

                    <div className="flexRow buttonContainer">
                        <Link to={`/login`} className="flexRow fullWidth">
                            <button type="button" className="buttonText">Return</button>
                        </Link>
                        <button type="submit" className="buttonText">Recover</button>
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
