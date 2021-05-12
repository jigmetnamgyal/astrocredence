import React from 'react'
import styles from './side.module.css';
import {Link} from 'react-router-dom';
import {ImCross} from 'react-icons/im'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai';
const SideBar = ({close, show}) => { 
    return (
        <div className={`${styles.sidebar} ${show && styles.open}`}>
            <div className={styles.sidebarHeader}>
                <p className={styles.logo}>Astro Credence</p>
                <ImCross className={styles.cross} onClick={close}/>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutUs">About Us</Link></li>
                <li><Link to="/Contact Us"> Contact Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/newsletter">Newsletter</Link></li>
            </ul>
            <div className={styles.socialMediaContainer}>
                    <a className={styles.solmedia} href="htt" rel="noreferrer noopener"><AiOutlineInstagram /> </a>
                    <a className={styles.solmedia} href="/" rel="noreferrer noopener"><AiOutlineFacebook /> </a>
                    <a className={styles.solmedia} href="/" rel="noreferrer noopener"><AiOutlineTwitter /> </a>
            </div>
        </div>
    )
}

export default SideBar
