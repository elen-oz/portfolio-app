import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import MyName from '../assets/my-name.png';
import mainStyles from '../styles/Main.module.css';
import styles from './Home.module.css';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? mainStyles.darkTheme : ''}>
      <div name='home' className={`${mainStyles.section} ${mainStyles.first}`}>
        <div className={mainStyles.container}>
          <p className={styles.greeting}>Hi! I am</p>
          <h1>
            <img
              src={MyName}
              alt='Elena Ozerova Frontend Developer'
              style={{ width: '250px' }}
            />
          </h1>

          <h2 className={styles.homeSubtitle}>
            and I love <br /> programming
          </h2>

          <p className={styles.description}>
            An enthusiastic <strong>Frontend Developer</strong> based in
            Stockholm, Sweden.
          </p>
          <div>
            <Link to='work' smooth={true} duration={500}>
              <div className={styles.btnContainer}>
                <button
                  className={
                    darkMode
                      ? `${mainStyles.button} ${mainStyles.buttonDarkmode}`
                      : mainStyles.button
                  }
                >
                  View Work
                  <HiArrowNarrowRight className='ml-3' />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
