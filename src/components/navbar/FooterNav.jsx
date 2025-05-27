import {useLocation, useNavigate} from "react-router-dom";

export default function FooterNav() {

    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (onPage) => {

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
       }
    };

    return (
        <nav className="footerNav flexRowSB">
                <button className="buttonIcon" onClick={() => handleNavClick('home')}>
                    <i className="bi bi-house"></i>
                </button>

                <button className="buttonIcon" onClick={() => handleNavClick('explore')}>
                    <i className="bi bi-search"></i>
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
