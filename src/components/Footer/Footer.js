import styles from './footer.module.css';
import {AiOutlineInstagram,AiOutlineGithub, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import me from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerChildOneContainer}>
                <div className={styles.footerOne}>
                    <div className={styles.titleHolder}>
                        <img className={styles.imgLogo} src={me} alt="me pic"/>
                        <h5>Astro Credence</h5>
                    </div>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className={styles.footerOneMediaContainer}>
                        <a
                            href="https://www.instagram.com/jigmetashinamgyal/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={styles.footerInsta}><AiOutlineInstagram/>
                        </a>
                        <a
                            href="https://www.facebook.com/Mugiwara.D.Jigme619/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={styles.footerFacebook}><AiFillFacebook/>
                        </a>
                        <a href="https://twitter.com/JigmeTashiNamg1" rel="noopener noreferrer" target="_blank" className={styles.footerTwitter}><AiOutlineTwitter/>
                        </a>
                        <a href="https://www.linkedin.com/in/jigme-tashi-namgyal-511a811a3/" rel="noopener noreferrer" target="_blank" className={styles.footerLinkedin}><AiFillLinkedin/>
                        </a>
                        <a href="https://github.com/JigmeT123" rel="noopener noreferrer" target="_blank" className={styles.footerLinkedin}><AiOutlineGithub/>
                        </a>
                    </div>
                </div>

                <div className={styles.footerTwo}>
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/bookShelf">BookShelf</Link>
                    <Link to="/books">Books Review</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/projects">Projects</Link>
                </div>
                <div className={styles.footerFour}>
                    <h4>About Us</h4>
                    <Link to="/aboutMe">About Me</Link>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footerChildTwoContainer}>
                <div className={styles.footerTwoContainer}>
                    <p>
                        &copy;Astro Credence 2021-
                        <span>
                           all rights reserved</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer