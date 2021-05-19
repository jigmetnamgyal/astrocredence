import styles from './homepage.module.css';
import picThatRepresentIs from '../../assets/place.svg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.homeTitle}>
                <div className={styles.titleContainer}>
                    <div className={styles.thisContains}>
                        <h1>Astro<br/>
                            Credence</h1>
                        <i>
                            <p>For the faintest stars still shine</p>
                        </i>
                        <Link to="/">
                            <Button className={styles.btnexplore} >
                            Explore
                            </Button>
                        </Link>
                    </div>

                </div>
                <div className={styles.imgRepresentUs}>
                    <img
                        className={styles.ourPic}
                        src={picThatRepresentIs}
                        alt="This is the iamge that represent us"/>
                </div>
            </div>
            <div className={styles.secondPart}>
                <h1>Something</h1>
            </div>
        </div>
    )
}

export default Homepage
