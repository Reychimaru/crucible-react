import {useLocation, useNavigate} from 'react-router-dom';

export default function HeaderNav() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (onPage) => {
        if (onPage === 'home') {
            navigate('/user/username');
        } else if (onPage === 'return') {
            navigate(-1);
        } else if (onPage === 'posting') {
            navigate('/posting');
        } else if (onPage === 'settings') {
            navigate('/settings'); // <-- Aggiorna questo path se necessario
        }
    };


    return (
        <nav className="headerNav flexRowSB">
            {location.pathname === '/' && (
                <button className="buttonIcon" onClick={() => handleNavClick('home')}>
                    <i className="bi bi-person-circle"></i>
                </button>
            )}

            {location.pathname === '/user/username' && (
                <button className="buttonIcon" onClick={() => handleNavClick('return')}>
                    <i className="bi bi-arrow-return-left"></i>
                </button>
            )}

            <h1>Crucible</h1>


            {location.pathname === '/' && (
                <button className="buttonIcon" onClick={() => handleNavClick('posting')}>
                    <i className="bi bi-pencil-square"></i>
                </button>
            )}

            {location.pathname === '/user/username' && (
                <button className="buttonIcon" onClick={() => handleNavClick('settings')}>
                    <i className="bi bi-gear"></i>
                </button>
            )}

        </nav>
    );
}
