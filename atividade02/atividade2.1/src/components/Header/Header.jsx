import { 
    HeaderContainer,
    Nav, 
    Logo,
    NavLinks,
    NavLink,
    NavLinkAnchor
} from './Header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <Logo src="src/components/images/logo.png" alt="Logo do Site" />
                <NavLinks>
                    <NavLink><NavLinkAnchor to="/">Home</NavLinkAnchor></NavLink>
                    <NavLink><NavLinkAnchor to="/perfil/{id}">Perfil</NavLinkAnchor></NavLink>
                    <NavLink><NavLinkAnchor to="/login">Login</NavLinkAnchor></NavLink>
                    <NavLink><NavLinkAnchor to="/suporte">Suporte</NavLinkAnchor></NavLink>
                </NavLinks>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;