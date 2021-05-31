import {useState, useEffect} from 'react';
import styles from './homepage.module.css';
// import picThatRepresentIs from '../../assets/place.svg';
// import picThatRepresentIs1 from '../../assets/agency.svg';
// import picThatRepresentIs2 from '../../assets/phil.svg';
// import picThatRepresentIs3 from '../../assets/space.svg';
import one from '../../assets/1.jpeg';
import two from '../../assets/2.jpeg';
import three from '../../assets/3.jpeg';
import four from '../../assets/4.jpeg';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap'
import Aos from 'aos';
import 'aos/dist/aos.css'
// import Footer from '../../components/Footer/Footer';

const Homepage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])

    return (
        <div className={styles.homepageContainer}>
            <div className={styles.homeTitle}>
                <div className={styles.titleContainer}>
                    <div className={styles.thisContains}>
                        <h1>Astro <br /> Credence</h1>
                        <p>For the faintiest star still shines</p>
                        <p className={styles.targetDesc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Link to="/">
                            <Button className={styles.btnexplore}>
                                Explore
                            </Button>
                        </Link>
                    </div>

                </div>w
                <div className={styles.imgRepresentUs}>
                    {/* <img
                        className={styles.ourPic}
                        src={picThatRepresentIs}
                        alt="This is the iamge that represent us"/> */
                    }
                    <Carousel className={styles.caroContainer} fade activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={2500}>
                        <Carousel.Item className={styles.ourPic}>
                            <img
                                className="d-block w-100"
                                src={one}
                                alt="First slide"/>
                          
                        </Carousel.Item>
                        <Carousel.Item className={styles.ourPic}>
                            <img
                                
                                className="d-block w-100 "
                                src={two}
                                alt="Second slide"/>

                        
                        </Carousel.Item>
                        <Carousel.Item className={styles.ourPic}>
                            <img
                                className="d-block w-100 "
                                src={three}
                                alt="Third slide"/>

                        </Carousel.Item>

                        <Carousel.Item className={styles.ourPic}>
                            <img
                                className="d-block w-100 h-100"
                                src={four}
                                alt="Third slide"/>

                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className={styles.secondPart}>
                <div data-aos="flip-up"><h1>Hello, World!</h1></div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Homepage
