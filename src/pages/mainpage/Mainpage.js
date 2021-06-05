import {useState, useEffect} from 'react';
import styles from './mainpage.module.css';
import {Carousel} from 'react-bootstrap'
import one from '../../assets/1.png';
import two from '../../assets/reflect-campaign_desktop_red.jpeg';
import three from '../../assets/reflect-campaign_desktop_yellow.jpeg';
import four from '../../assets/4.png';
import five from '../../assets/5.svg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Thridpart from '../../components/thridPart/Thridpart';

const Mainpage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])
    
    return (
        <div className={styles.mainpageContainer}>
            <div className={styles.topContainer}>
                <div className={styles.contentForUs}>
                    <h1>Astro
                        <br/>
                        Credence</h1>
                    <p>For the faintiest star still shines</p>
                    <p className={styles.targetDesc}>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.</p>
                    <Link to="/">
                        <Button className={styles.btnexplore}>
                            Explore
                        </Button>
                    </Link>
                </div>
                <Carousel
                    className={styles.caroContainer}
                    fade="fade"
                    activeIndex={index}
                    onSelect={handleSelect}
                    controls={false}
                    indicators={false}
                    interval={1500}>
                    {/* <Carousel.Item className={styles.ourPic}>
                            <img
                                className="d-block w-100"
                                src={five}
                                alt="First slide"/>

                        </Carousel.Item> */
                    }

                    <Carousel.Item className={styles.ourPic}>
                        <img className="d-block w-100 " src={two} alt="Second slide"/>

                    </Carousel.Item>

                    <Carousel.Item className={styles.ourPic}>
                        <img className="d-block w-100 " src={three} alt="Third slide"/>

                    </Carousel.Item>

                    {/* <Carousel.Item className={styles.ourPic}>
                            <img
                                className="d-block w-100 h-100"
                                src={four}
                                alt="Third slide"/>

                        </Carousel.Item> */
                    }
                    {/* <Carousel.Item className={styles.ourPic}>
                            <img
                                className="d-block w-100 h-100"
                                src={five}
                                alt="Third slide"/>

                        </Carousel.Item> */
                    }
                </Carousel>
                <div className={styles.waveAnimate}>
                    <div className={styles.wave}></div>
                    <div className={styles.wave1}></div>
                </div>
            </div>
            <div className={styles.secondPart}>
                <div data-aos="flip-up">
                    <h1>Hello, World!</h1>
                </div>
            </div>
            <Thridpart/>
        </div>
    )
}

export default Mainpage
