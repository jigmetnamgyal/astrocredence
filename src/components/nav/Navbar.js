import styles from './navbar.module.css';
import Ham from './tools/hamBurger';
import {Link} from 'react-router-dom';
import {GoHome} from 'react-icons/go'
import {BsInfoCircle} from 'react-icons/bs';
import {MdPermContactCalendar} from 'react-icons/md';
import { GiThreeFriends} from 'react-icons/gi';
import {ImBlog} from 'react-icons/im';
import logo from '../../assets/logo.svg';

const Navbar = ({hamHandler}) => {
    return (
        <header className={styles.navBar}>
                <div className={styles.hamHolder}>
                    <Ham click = {hamHandler}/>
                </div>
                <div className={styles.navbarLogo}>
                    <img className={styles.astroCLogo} src={logo} alt="Astro Credence Logo"/>
                </div>
                   
                <nav className={styles.header__navigation}>
                    <ul>
                        <Link to="/"><GoHome className={styles.icons} /> Home</Link>
                        <Link to="/aboutUs"><BsInfoCircle className={styles.icons} /> About Us</Link>
                        <Link to="/contactUs"><MdPermContactCalendar className={styles.icons} /> Contact Us</Link>
                        <Link to="/projects"><ImBlog className={styles.icons} /> Blog</Link>
                        <Link to="/newsletter"><GiThreeFriends className={styles.icons} /> Newsletter</Link>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar