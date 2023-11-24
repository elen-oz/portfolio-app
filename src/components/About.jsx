import { useTheme } from '../hooks/useTheme';
import mainStyles from '../styles/Main.module.css';
import styles from './About.module.css';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? mainStyles.darkTheme : ''}>
      <div name='about' className={mainStyles.section}>
        {/* container-- */}
        <div className={mainStyles.container}>
          <div className={styles.grid}>
            <div className={styles.titleContainer}>
              <p className={mainStyles.title}>About</p>
            </div>
            <div></div>
          </div>
          <div className={styles.content}>
            <div className={styles.intro}>
              <p className={styles.text}>
                Hi, I&apos;m <strong>Elena Ozerova</strong>, nice to meet you.
              </p>
            </div>
            <div>
              <p>
                Frontend developer with over a year of self-study in frontend
                development. Currently enhancing my skills at&nbsp;
                <strong>Hyper Island</strong>&apos;s&nbsp;program. Proficient
                in&nbsp;<em>React</em> and <em>JavaScript</em>, I&apos;m
                dedicated to delivering top-quality solutions.
                <br />
                <br />
                Eager for new opportunities and collaborations, let&apos;s
                create exceptional digital applications together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
