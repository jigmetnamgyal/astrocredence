import {useState, useEffect} from 'react';
import styles from './aboutus.module.css'
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {GiTrafficCone} from 'react-icons/gi';
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])
    return (
        <div className={styles.about}>
             
            <div className={styles.aboutContent}>
                <div className={styles.aboutContentTitle}>
                    <h1>Join Our Team</h1>
                    <p>Help us on our quest to make a better Bhutan</p>
                    
                    <Link to="/signUp"><Button className={styles.supportBtn}>Be a Part!</Button></Link>
                   
                </div>
                
            </div>

            <div className={styles.meetTeam}>
                <div data-aos="flip-up">
                    <h1>Meet our team</h1>
                </div>
                   
            </div>
               
        </div>
    )
}

export default About