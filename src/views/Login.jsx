export default function Login() {
    return (
        <div className="centerWrapper">
            <article className="container">
                <h3>Login</h3>
                <form className="flexColumn">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" placeholder="Enter your email"/>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" placeholder="Enter your password"/>
                    <div className="flexRow formButtons">
                        <button className="buttonText">Recover Password</button>
                        <button className="buttonText">Login</button>
                    </div>
                </form>
            </article>

            <article className="container">
                <h3>New user?</h3>
                <div className="flexRow formButtons">
                    <button className="buttonText">Create Account</button>
                </div>
            </article>
        </div>

    )
}