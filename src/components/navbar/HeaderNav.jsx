import {useLocation, useNavigate} from 'react-router-dom';

export default function HeaderNav() {
    const location = useLocation();
    const navigate = useNavigate();

    const hiddenPaths = ['/login', '/register', '/recover'];
    const returnPaths = ['/', '/explore', '/communities', 'notifications', 'chats'];

    if (hiddenPaths.includes(location.pathname)) {
        return null;
    }

    const handleNavClick = (onPage) => {
        if (onPage === 'home') {
            navigate('/user/username');
        } else if (onPage === 'return') {
            navigate(-1);
        } else if (onPage === 'posting') {
            navigate('/posting');
        } else if (onPage === 'settings') {
            navigate('/settings');
        }
    };

    return (
        <nav className="headerNav flexRowSB">
            {!returnPaths.includes(location.pathname) && (
                <button className="buttonIcon" onClick={() => handleNavClick('return')}>
                    <i className="bi bi-arrow-return-left"></i>
                </button>
            )}

            {location.pathname === '/' && (
                <button className="buttonIcon" onClick={() => handleNavClick('home')}>
                    <i className="bi bi-person-circle"></i>
                </button>
            )}

            {location.pathname === '/explore' && (
                <button className="buttonIcon" onClick={() => handleNavClick('settings')}>
                    <i className="bi bi-tags"></i>
                </button>
            )}



            {location.pathname === '/' && (
                <h1>Crucible</h1>
            )}
            {location.pathname === '/explore' && (
                <h1>Explore</h1>
            )}
            {location.pathname === '/communities' && (
                <h1>Communities</h1>
            )}
            {location.pathname === '/personalize' && (
                <h1>Personalize</h1>
            )}


            {location.pathname === '/' && (
                <button className="buttonIcon" onClick={() => handleNavClick('posting')}>
                    <i className="bi bi-pencil-square"></i>
                </button>
            )}

            {location.pathname === '/explore' && (
                <button className="buttonIcon" onClick={() => handleNavClick('home')}>
                    <i className="bi bi-search"></i>
                </button>
            )}

            {location.pathname === '/posting' && (
                <button className="buttonIcon" onClick={() => handleNavClick('settings')}>
                    <i className="bi bi-info-circle"></i>
                </button>
            )}

            {location.pathname === '/user/username' && (
                <button className="buttonIcon" onClick={() => handleNavClick('settings')}>
                    <i className="bi bi-gear"></i>
                </button>
            )}

            {location.pathname === '/personalize' && (
                <button className="buttonIcon" onClick={() => handleNavClick('settings')}>
                    <i className="bi bi-info-circle"></i>
                </button>
            )}
        </nav>
    );
}
