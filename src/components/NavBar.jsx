import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CgDarkMode } from 'react-icons/cg';
import { Link } from 'react-scroll';
import Logo from '../assets/logo-elena.png';

import mainStyles from '../styles/Main.module.css';
import styles from './Navbar.module.css';

function NavBar() {
  const [nav, setNav] = useState(false);

  const { darkMode, switchMode } = useTheme();

  console.log('local storage', window.localStorage.getItem('isDarkMode'));

  const handleClick = () => setNav(!nav);

  const handleMode = () => {
    switchMode();
    console.log('switchMode', darkMode);
  };

  return (
    <div className={darkMode ? mainStyles.darkTheme : ''}>
      <div className={styles.header}>
        {/* -------------Social Links Header------------- */}
        <ul className={styles.socialLinks}>
          <li className={styles.socialLinksItem}>
            <div className={styles.socialLinksContent}>
              <a
                className={styles.socialLinksLink}
                href='https://www.linkedin.com/in/elen-oz/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </li>

          <li className={styles.socialLinksItem}>
            <div className={styles.socialLinksContent}>
              <a
                className={styles.socialLinksLink}
                href='https://github.com/elen-oz'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub size={20} />
              </a>
            </div>
          </li>

          <li className={styles.socialLinksItem}>
            <div className={styles.socialLinksContent}>
              <a
                className={styles.socialLinksLink}
                href='mailto: ozerova.lenka@gmail.com?subject=Site Portfolio Mail'
              >
                <HiOutlineMail size={20} />
              </a>
            </div>
          </li>

          <li className={styles.socialLinksItem}>
            <div className={styles.socialLinksContent}>
              <a
                className={styles.socialLinksLink}
                href='https://rebrand.ly/elen-oz-cv'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsFillPersonLinesFill size={20} />
              </a>
            </div>
          </li>
        </ul>

        {/* -------------Header Menu------------- */}
        <ul className={styles.headerMenu}>
          <li>
            <Link
              className={styles.menuItem}
              to='about'
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.menuItem}
              to='skills'
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className={styles.menuItem}
              to='work'
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className={styles.menuItem}
              to='contact'
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* ---------- LOGO container ----------- */}
        <div className={styles.logoContainer}>
          <div className={styles.darkMode}>
            <CgDarkMode onClick={handleMode} />
          </div>

          <div className={styles.logoContainer}>
            <Link to='home' smooth={true} duration={500}>
              <img src={Logo} alt='Logo Image' className={styles.logo} />
            </Link>
          </div>

          {/* ----------- Hamburger -------------- */}
          <div onClick={handleClick} className={styles.hamburgerIcon}>
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
        </div>

        {/* ---------- Mobile menu ----------- */}
        <ul className={!nav ? styles.hidden : styles.mobileMenu}>
          <li className={styles.mobileMenuItem}>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className={styles.mobileMenuItem}>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className={styles.mobileMenuItem}>
            <Link
              onClick={handleClick}
              to='skills'
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className={styles.mobileMenuItem}>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className={styles.mobileMenuItem}>
            <Link
              onClick={handleClick}
              to='contact'
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* ---------- Social Icons left side ------- */}
        <div className={styles.leftMenu}>
          <ul>
            <li
              className={
                darkMode
                  ? `${styles.leftMenuItem} ${mainStyles.darkTheme}`
                  : `${styles.leftMenuItem}`
              }
            >
              <a
                className={styles.leftMenuLink}
                href='https://www.linkedin.com/in/elen-oz/'
                target='_blank'
                rel='noreferrer'
              >
                Linlkedin <FaLinkedin size={30} />
              </a>
            </li>

            <li
              className={
                darkMode
                  ? `${styles.leftMenuItem} ${mainStyles.darkTheme}`
                  : `${styles.leftMenuItem}`
              }
            >
              <a
                className={styles.leftMenuLink}
                href='https://github.com/elen-oz'
                target='_blank'
                rel='noreferrer'
              >
                Github <FaGithub size={30} />
              </a>
            </li>

            <li
              className={
                darkMode
                  ? `${styles.leftMenuItem} ${mainStyles.darkTheme}`
                  : `${styles.leftMenuItem}`
              }
            >
              <a
                className={styles.leftMenuLink}
                href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>

            <li
              className={
                darkMode
                  ? `${styles.leftMenuItem} ${mainStyles.darkTheme}`
                  : `${styles.leftMenuItem}`
              }
            >
              <a
                className={styles.leftMenuLink}
                href='https://rebrand.ly/elen-oz-cv'
                target='_blank'
                rel='noopener noreferrer'
              >
                Resume
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
