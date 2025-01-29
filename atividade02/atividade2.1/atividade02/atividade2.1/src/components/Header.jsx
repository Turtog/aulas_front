import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <img src="src/components/images/logo.png" alt="Logo do Site" className="logo" />
                <ul className="nav-links">
                    <li><Link to="/index">Home</Link></li>
                    <li><Link to="/perfil/{id}">Perfil</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/suporte">Suporte</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;