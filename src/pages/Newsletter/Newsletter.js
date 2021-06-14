import styles from './newsletter.module.css';
import newsletter from '../../assets/newsletter.svg';
import {Grid, TextField, Button} from '@material-ui/core'
import {useState} from 'react';

import thanks from '../../assets/thanks.svg';


const FriendZone = () => {
    const [email, setEmail] = useState("");
    const [flag, setFlag] = useState(true);

    const nameHandler = e => {
        setEmail(e.target.value);
    }
    
    
    return (
        <div className={styles.friendzoneContainer}>
            <div className={styles.topPart}>
                <div className={styles.imgHolderNews}>
                    <img className={styles.imgNews} src={newsletter} alt="Newsletter"/>
                </div>
                <div className={styles.headerTitleNews}>
                    <h1>Astro Credence Newsletter</h1>
                    <p>The Astro Credence Newsletter is a paid weekly(ish) email newsletter. So if you want to read more premium content from us, sent directly in your inbox, we'd love for you to join the party.</p>
                </div>
            </div>
            <div className={styles.bottomPart}>
                <p>Join a growing community of friendly readers. Every Sunday we share cool content with wide range of topic. We send our insights directly to your inbox.</p>
                {flag ? (
                     <form className={styles.formContainer}>
                     <Grid className={styles.gridContainer} container="container">
                         <TextField
                             className={styles.textField}
                             multiline={true}
                             variant="outlined"
                             label="Email"
                             value={email}
                             onChange={nameHandler}
                             />
                         <Button className={styles.submitbtn}>Submit</Button>
                     </Grid>
                 </form>
                ):(
                    <div className={styles.thanksContainer}>
                         <h1 className={styles.thanksLetter}>Thank you for subscribing to my newsletter. I will be looking forward to talk with you :)</h1>
                         <img className={styles.thanksImg} src={thanks} alt="thank you" />
                    </div>
                   
                )      
                }
                <p>Feel free to reply to our mail. We love to talk. We can even hang out and have a nice coffee together. we are looking forward to talk to you :)</p>
            </div>
        </div>
    )
}

export default FriendZone