import { useState } from 'react';
import './Login.css';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    // Simulazione degli stati di validazione (esempio)
    const isUsernameShort = false;
    const isUsernameUsed = false;
    const isUsernameInvalid = false;

    const isEmailInvalid = false;
    const isEmailUsed = false;

    const isPasswordShort = false;
    const isPasswordInvalid = false;
    const isPasswordMatching = true;

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="centerWrapper">
            <article className="microContainer">
                <h1 className="containerTitle">Crucible</h1>
                <h3>Register</h3>
                <form className="flexColumn">

                    <label htmlFor="username" className="flexRowSB">
                        <span>Username</span>
                        {isUsernameUsed ? (
                            <span className="labelError">Username already taken</span>
                        ) : isUsernameShort ? (
                            <span className="labelError">Minimum 5 characters</span>
                        ) : isUsernameInvalid ? (
                            <span className="labelError">No symbols allowed</span>
                        ) : (
                            <span className="labelPlaceholder"></span>
                        )}
                    </label>
                    <input
                        name="username"
                        type="text"
                        className={ (isUsernameUsed || isUsernameShort || isUsernameInvalid) ? "inputError" : "" }
                        placeholder="Enter your username"
                    />

                    <label htmlFor="email" className="flexRowSB">
                        <span>Email</span>
                        {isEmailUsed ? (
                            <span className="labelError">Email already registered</span>
                        ) : isEmailInvalid ? (
                            <span className="labelError">Email not valid</span>
                        ) : (
                            <span className="labelPlaceholder"></span>
                        )}
                    </label>
                    <input
                        name="email"
                        type="email"
                        className={ (isEmailUsed || isEmailInvalid) ? "inputError" : "" }
                        placeholder="Enter your email"
                    />

                    <label htmlFor="password" className="flexRowSB">
                        <span>Password</span>
                        {isPasswordShort ? (
                            <span className="labelError">Minimum 8 characters</span>
                        ) : isPasswordInvalid ? (
                            <span className="labelError">Password invalid</span>
                        ) : (
                            <span className="labelPlaceholder"></span>
                        )}
                    </label>
                    <div className="flexRow passwordContainer">
                        <input
                            name="password"
                            className={ (isPasswordShort || isPasswordInvalid) ? "inputError" : "" }
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            className="buttonTextIcon"
                            onClick={togglePasswordVisibility}
                            aria-label="Toggle password visibility"
                        >
                            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                        </button>
                    </div>

                    <label htmlFor="confirmPassword" className="flexRowSB">
                        <span>Confirm password</span>
                        {isPasswordMatching ? (
                            <span className="labelPlaceholder"></span>
                        ) : (
                            <span className="labelError">Password not matching</span>
                        )}
                    </label>
                    <div className="flexRow passwordContainer">
                        <input
                            name="confirmPassword"
                            className={isPasswordMatching ? "" : "inputError"}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            className="buttonTextIcon"
                            onClick={togglePasswordVisibility}
                            aria-label="Toggle password visibility"
                        >
                            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                        </button>
                    </div>

                    <div className="flexRow buttonContainer">
                        <button type="submit" className="buttonText">Register</button>
                    </div>
                </form>
            </article>

            <div className="spacer"></div>

            <article className="microContainer">
                <h3>Already registered?</h3>
                <div className="flexRow buttonContainer">
                    <button type="button" className="buttonText">Login</button>
                </div>
            </article>
        </div>
    );
}
