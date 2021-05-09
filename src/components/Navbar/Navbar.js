import styles from './navbar.module.css';
import Logo from '../../assets/logo.svg';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img className={styles.logoImg} src={Logo} alt="AstroCredence logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                    <NavItem>
                        <NavLinks to="/homepage">Homepage</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/aboutUs">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contactUs">Contact Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/blog">Blog</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/newsletter">Newsletter</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>  
        </>
    )
}

export default Navbar
