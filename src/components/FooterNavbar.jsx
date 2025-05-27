import { Link } from "react-router-dom";

export default function FooterNavbar() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}
