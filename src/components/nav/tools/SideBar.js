import React from 'react'
import styles from './side.module.css';
import {Link} from 'react-router-dom';
import {ImCross} from 'react-icons/im'
import {GoHome} from 'react-icons/go'
import {MdPersonPin,MdRateReview} from 'react-icons/md';
import {GiBookshelf, GiThreeFriends} from 'react-icons/gi';
import {ImBlog} from 'react-icons/im';
import {BsInfoCircle} from 'react-icons/bs';
import {MdPermContactCalendar} from 'react-icons/md';

const SideBar = ({close, show}) => { 
    return (
        <div className={`${styles.sidebar} ${show && styles.open}`}>
            <div className={styles.sidebarHeader}>
                <p className={styles.logo}>Astro Credence</p>
                <ImCross className={styles.cross} onClick={close}/>
            </div>
            <ul>
                <li><Link to="/"><GoHome className="icons" /> Home</Link></li>
                <li><Link to="/aboutUs"><BsInfoCircle className="icons" /> About Us</Link></li>
                <li><Link to="/Contact Us"><MdPermContactCalendar className="icons" /> Contact Us</Link></li>
                <li><Link to="/blog"><ImBlog className="icons" /> Blog</Link></li>
                <li><Link to="/newsletter"><GiThreeFriends className="icons" /> Newsletter</Link></li>
            </ul>
        </div>
    )
}

export default SideBar
