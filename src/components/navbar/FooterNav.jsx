import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from 'react';

export default function FooterNav() {
    const location = useLocation();
    const navigate = useNavigate();
    const clickSound = useRef(new Audio('/assets/sounds/navigation.mp3'));

    // Nascondi il footer nella pagina di login
    const hiddenPaths = ['/login', '/register', '/recover', '/setup'];
    if (hiddenPaths.includes(location.pathname)) {
        return null;
    }

    const handleNavClick = (onPage) => {
        clickSound.current.currentTime = 0;
        clickSound.current.play();

        switch (onPage) {
            case "home":
                navigate("/");
                break;
            case "explore":
                navigate("/explore");
                break;
            case "communities":
                navigate("/communities");
                break;
            case "notifications":
                navigate("/notifications");
                break;
            case "chats":
                navigate("/chats");
                break;
            default:
                break;
        }
    };

    return (
        <nav className="footerNav flexRowSB">
            <button className="buttonIcon" onClick={() => handleNavClick('home')}>
                <i className="bi bi-house"></i>
            </button>
            <button className="buttonIcon" onClick={() => handleNavClick('explore')}>
                <i className="bi bi-compass"></i>
            </button>
            <button className="buttonIcon" onClick={() => handleNavClick('communities')}>
                <i className="bi bi-people"></i>
            </button>
            <button className="buttonIcon" onClick={() => handleNavClick('notifications')}>
                <i className="bi bi-bell"></i>
            </button>
            <button className="buttonIcon" onClick={() => handleNavClick('chats')}>
                <i className="bi bi-chat"></i>
            </button>
        </nav>
    );
}
