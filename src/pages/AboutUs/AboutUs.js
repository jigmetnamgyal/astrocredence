import { useEffect, memo } from "react";
import styles from "./aboutus.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import Container from "@material-ui/core/Container";
import members from "./team";
import TeamProfile from "./TeamProfile";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container maxWidth="lg" className={styles.about}>
      <section className={styles.aboutContent}>
        <div className={styles.aboutHeading}>
          <div className={styles.box}>
            <span>
              A<br />S<br />T<br />R<br />O<br />C<br />R<br />E<br />D<br />E
              <br />N<br />C<br />E
            </span>
            <span>
              <small>The</small>
              <br /> TEAM
            </span>
          </div>
          <div className={styles.aboutIntroduction}>
            <p className={styles.desc}>We are fans of digital, geeks by nature, addicted to social networks and completely crazy about design</p>
            <p className={styles.info}>Our sharp-minded team mobilizes creative, technical and fine strategist profiles to support you in the wildest projects!</p>
          </div>
        </div>
        <div className={styles.aboutTeam}>
            {
                members.map((member, idx) => (
                    <TeamProfile key={idx} avatar={member.avatar} name={member.name} role={member.role} />
                ))
            }
        </div>
      </section>
    </Container>
  );
};

export default memo(About);
