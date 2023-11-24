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
      <div name='home' className={mainStyles.section}>
        {/* container */}
        <div className={mainStyles.container}>
          <p className={styles.greeting}>Hi! I am</p>
          {/* <h1 className='text-4xl sm:text-7xl font-bold'>Elena</h1> */}
          <h1>
            <img
              src={MyName}
              alt='Elena Ozerova Frontend Developer'
              style={{ width: '250px' }}
            />
          </h1>

          <h2 className={styles.subtitle}>
            and I love <br /> programming
          </h2>

          <p className={styles.description}>
            An enthusiastic <strong>Frontend Developer</strong> based in
            Stockholm, Sweden.
          </p>
          <div>
            <Link to='work' smooth={true} duration={500}>
              <button className={styles.button}>
                View Work
                <HiArrowNarrowRight className='ml-3' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
