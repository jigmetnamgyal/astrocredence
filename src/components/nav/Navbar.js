import {useState, useEffect} from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.svg';
import styles from './navbar.module.css';
import Ham from './tools/hamBurger';

const Navbar = ({hamHandler}) => {

    const [handleShow, setHandleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 350){
                setHandleShow(true)
            }else{
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
                    <Ham click = {hamHandler}/>
                </div>
                <div className={styles.navbarLogo}>
                    <img className={styles.astroCLogo} src={logo} alt="Astro Credence Logo"/>
                </div>
                   
                <nav className={styles.header__navigation}>
                    <ul>
                        <Link to="/"> Home</Link>
                        <Link to="/aboutUs">About Us</Link>
                        <Link to="/contactUs">Contact Us</Link>
                        <Link to="/projects">Blog</Link>
                        <Link to="/newsletter">Newsletter</Link>
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