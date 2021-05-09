import React from 'react'
import styles from './ham.module.css';
import {IoIosMenu} from 'react-icons/io';
const HamBurger = ({click}) => {
    return (
        <button className={styles.hamburger} onClick={click}>
            <IoIosMenu className={styles.hamLine}/>
        </button>
    )
}

export default HamBurger