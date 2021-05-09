import styled from 'styled-components';
import {Link as LinkR, NavLink} from 'react-router-dom';

// import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: #cddafd;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease; 
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width:1200px;
    @media screen and (max-width: 768px) {
        width: 100vw;
    }
`
export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100px;
    width: 90px;
    object-fit: contain;
    @media screen and (max-width: 768px) {
        width: 70px;
    }
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display:block;
        position: absolute;
        top: 13px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;    
        color: white;    
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right:-20px;
    @media screen and (max-width: 768px) {
        display:none;

    }
`

export const NavItem = styled.li`
    height: 100px;
`

export const NavLinks = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    color: black;
    $.active{
        border-bottom: 3px solid #01bf71;

    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 40px;
    background: #ffafcc;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline:none;
    border: none;
    cursor: pointer;
    transition: 0.2s all ease-in-out; 
    text-decoration: none;

    &:hover{
        transition: 0.2s all ease-in-out; 
        background: #fff;
        color: #010606;
    }
`