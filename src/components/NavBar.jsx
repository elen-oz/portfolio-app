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
                href='Elena_CV.pdf'
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
        <ul className={!nav ? 'hidden' : styles.mobileMenu}>
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
        <div className='hidden md:flex fixed flex-col top-[35%] md:top-[14%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-50 text-neutral-800 hover:text-red-700  dark:bg-gray-800 dark:text-neutral-300'>
              <a
                className='flex justify-between items-center w-full'
                href='https://www.linkedin.com/in/elen-oz/'
                target='_blank'
                rel='noreferrer'
              >
                Linlkedin <FaLinkedin size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-50 text-neutral-800 hover:text-red-700  dark:bg-gray-800 dark:text-neutral-300'>
              <a
                className='flex justify-between items-center w-full'
                href='https://github.com/elen-oz'
                target='_blank'
                rel='noreferrer'
              >
                Github <FaGithub size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-50 text-neutral-800 hover:text-red-700 dark:bg-gray-800 dark:text-neutral-300'>
              <a
                className='flex justify-between items-center w-full'
                href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-50 ttext-neutral-800 hover:text-red-700 dark:bg-gray-800 dark:text-neutral-300'>
              <a
                className='flex justify-between items-center w-full'
                href='Elena_CV.pdf'
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
