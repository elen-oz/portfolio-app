import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import MyName from '../assets/my-name.png';
import styles from '../styles/main.module.css';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? styles.darkTheme : ''}>
      <div name='home' className={styles.homeComponent}>
        {/* container */}
        {/* <div className='container max-w-[900px] mx-auto flex flex-col justify-center h-full'> */}
        <div className={styles.container}>
          <p className={styles.textAccent}>Hi! I am</p>
          {/* <h1 className='text-4xl sm:text-7xl font-bold'>Elena</h1> */}
          <h1>
            <img
              src={MyName}
              alt='Elena Ozerova Frontend Developer'
              style={{ width: '250px' }}
            />
          </h1>

          {/* <h2 className='text-neutral-500 text-4xl sm:text-7xl font-bold'> */}
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
