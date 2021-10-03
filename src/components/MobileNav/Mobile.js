import React from 'react'
import style from './Mobile.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import MobNav from './MobNav'
import { useState } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'


function Mobile() {

    const [open, setopen] = useState(false)


    const hamburger = <GiHamburgerMenu className={style.ham} onClick={()=>setopen(!open)}/>
    const close = <AiOutlineCloseCircle className={style.ham} onClick={()=>setopen(!open)} size='20px'/>

    const closeMenu = () => {
        setopen(false)
    }

    return (
        <div className="nav">

            <div className={style.logoholder}>
            <div className={style.logo}>
            </div>
            
            {open ? close : hamburger}

            </div>

            {open && <MobNav isMobile={true} closeMenu={closeMenu} />}
        </div>
    )
    }

export default Mobile;
