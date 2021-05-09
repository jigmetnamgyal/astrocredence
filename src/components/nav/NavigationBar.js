import React, { useState } from 'react'
import NavBar from './Navbar';
import SideBar from './tools/SideBar';
import styles from './navbar.module.css';

const NavigationBar = () => {
    
    const [toggleFlag, setToggleFlag] = useState(false);
    const hamHandler = () => {
        if (!toggleFlag) {
            setToggleFlag(true)
        }

    }
    const closeHandler = () => {
        setToggleFlag(false);
    }
    return (
        <div className={styles.mainlajust}>
            <NavBar hamHandler={hamHandler}/>
            <SideBar close={closeHandler} show={toggleFlag} />
        </div>
    )
}

export default NavigationBar