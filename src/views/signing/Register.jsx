import {useState} from 'react';
import {Link} from 'react-router-dom';

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

    const [isTosOpen, setIsTosOpen] = useState(false);

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
                        className={(isUsernameUsed || isUsernameShort || isUsernameInvalid) ? "inputError" : ""}
                        placeholder="Enter your username"
                    />

                    <label htmlFor="email" className="flexRowSB">
                        <span>Email</span>
                        {isEmailUsed ? (
                            <span className="labelError">Email already registered</span>
                        ) : isEmailInvalid ? (
                            <span className="labelError">Invalid email</span>
                        ) : (
                            <span className="labelPlaceholder"></span>
                        )}
                    </label>
                    <input
                        name="email"
                        type="email"
                        className={(isEmailUsed || isEmailInvalid) ? "inputError" : ""}
                        placeholder="Enter your email"
                    />

                    <label htmlFor="password" className="flexRowSB">
                        <span>Password</span>
                        {isPasswordShort ? (
                            <span className="labelError">Minimum 8 characters</span>
                        ) : isPasswordInvalid ? (
                            <span className="labelError">Invalid password</span>
                        ) : (
                            <span className="labelPlaceholder"></span>
                        )}
                    </label>
                    <div className="flexRow fullWidth">
                        <input
                            name="password"
                            className={`inputWithButton ${(isPasswordShort || isPasswordInvalid) ? "inputError" : ""}`}
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

                    <label htmlFor="confirmPassword" className="flexRowSB">
                        <span>Confirm password</span>
                        {isPasswordMatching ? (
                            <span className="labelPlaceholder"></span>
                        ) : (
                            <span className="labelError">Password not matching</span>
                        )}
                    </label>
                    <div className="flexRow fullWidth">
                        <input
                            name="confirmPassword"
                            className={`inputWithButton ${!isPasswordMatching ? "inputError" : ""}`}
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

                    <label htmlFor="TOS">By registering you accept our TOS</label>
                    <button type="button" name="TOS" className="buttonText" onClick={() => setIsTosOpen(true)}>
                        Read our Terms of Service
                    </button>

                    <div className="flexRow buttonContainer">
                        <button type="submit" className="buttonText">Register</button>
                    </div>
                </form>
            </article>

            <div className="spacer"></div>

            <article className="microContainer">
                <h3>Already registered?</h3>
                <div className="flexRow buttonContainer">
                    <Link to={`/login`} className="flexRow fullWidth">
                        <button type="button" className="buttonText">Login</button>
                    </Link>
                </div>
            </article>

            {isTosOpen && (
                <div className="modalOverlay">
                    <article className="tosContainer">
                        <div className="tosHeader">
                            <h3>Terms and Conditions</h3>
                            <button className="buttonIcon" onClick={() => setIsTosOpen(false)}>
                                <i className="bi bi-x-circle"></i>
                            </button>
                        </div>
                        <div className="tosFooter">
                            <section>
                                <h4>1. Acceptance of Terms</h4>
                                <p>By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you may not use the website.</p>
                            </section>

                            <section>
                                <h4>2. Changes to Terms</h4>
                                <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of the website constitutes acceptance of the updated Terms.</p>
                            </section>

                            <section>
                                <h4>3. Use of the Service</h4>
                                <p>You agree not to use the website for any unlawful or prohibited activities. You must comply with all applicable local, national, and international laws and regulations.</p>
                            </section>

                            <section>
                                <h4>4. User Content</h4>
                                <p>Any content submitted by users remains their responsibility. We do not endorse or guarantee the accuracy of user-generated content.</p>
                            </section>

                            <section>
                                <h4>5. Termination</h4>
                                <p>We reserve the right to suspend or terminate your access to the service at our discretion, without notice, for conduct that violates these Terms.</p>
                            </section>

                            <section>
                                <h4>6. Contact</h4>
                                <p>If you have any questions about these Terms, please contact us at support@example.com.</p>
                            </section>
                        </div>
                    </article>
                </div>
            )}
        </div>
    );
}
