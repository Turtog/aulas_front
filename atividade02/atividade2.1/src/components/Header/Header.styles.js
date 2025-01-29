import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    background-color: #0583F2;
    color: #fff;
    text-align: center;
    padding: 1rem;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #0583F2;
    position: relative;
`;

export const Logo = styled.img`
    max-height: 3rem;
`;

export const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: flex-end; /* Alinha os links à direita */
`;

export const NavLink = styled.li`
    margin: 0;
`;

export const NavLinkAnchor = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: #F2441D;
    border-radius: 0.5rem;

    &:hover {
        background-color: #0056b3;
    }
`;