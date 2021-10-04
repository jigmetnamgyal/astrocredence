import { useState, useEffect } from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import {  NavLink } from 'react-router-dom';
import logo from '../../assets/logo1.svg';
import styles from './navbar.module.css';
import Ham from './tools/hamBurger';

const Navbar = ({hamHandler}) => {

    const [handleShow, setHandleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                setHandleShow(true)
            } else {
                setHandleShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll', null);
        };
    }, [])

    return (
        <header className={`${styles.navBar} ${handleShow && styles.header__scrolled}`}>
            <div className={styles.hamHolder}>
                <Ham click={hamHandler} />
            </div>
            <div className={styles.navbarLogo}>
                <img className={styles.astroCLogo} src={logo} alt="Astro Credence Logo" />
            </div>

            <nav className={styles.header__navigation}>
                <ul>
                    <NavLink activeStyle={{
                        borderBottomStyle: 'solid', borderBottomColor: "blue", borderBottomWidth: 2
                    }} to="/" className={styles.style}> Home</NavLink>
                    
                    <NavLink activeStyle={{
                        borderBottomStyle: 'solid', borderBottomColor: "blue", borderBottomWidth: 2
                    }} to="/aboutUs" className={styles.style}  >About Us</NavLink>
                    
                    <NavLink activeStyle={{
                        borderBottomStyle: 'solid', borderBottomColor: "blue", borderBottomWidth: 2
                    }} to="/contactUs" className={styles.style}>Contact Us</NavLink>
                    
                    <NavLink activeStyle={{
                        borderBottomStyle: 'solid', borderBottomColor: "blue", borderBottomWidth: 2
                    }} to="/projects" className={styles.style}>Blog</NavLink>
                   
                    <NavLink activeStyle={{
                        borderBottomStyle: 'solid', borderBottomColor: "blue", borderBottomWidth: 2
                    }} to="/newsletter" className={styles.style}>Newsletter</NavLink>
                    
                    <NavLink activeStyle={{
                        borderBottomStyle: 'solid', borderBottomColor: "blue", borderBottomWidth: 2
                    }} to="/shop" className={styles.style}>Shop</NavLink>
                </ul>
            </nav>
            <div className={styles.socialMediaContainer}>
                <a className={styles.solmedia} href="https://www.instagram.com/astrocredence/" target="_blank" rel="noreferrer noopener"><AiOutlineInstagram /> </a>
                <a className={styles.solmedia} href="/" rel="noreferrer noopener"><AiOutlineFacebook /> </a>
                <a className={styles.solmedia} href="/" rel="noreferrer noopener"><AiOutlineTwitter /> </a>
            </div>
        </header>
    )
}

export default Navbar