import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CgDarkMode } from 'react-icons/cg';
import { Link } from 'react-scroll';
import Resume from '../assets/Elena-O_CV.pdf';
import Logo from '../assets/logo_dark2.png';

// const { darkMode } = useTheme();

// dark:bg-sky-950 dark:text-neutral-300
// dark:bg-gray-800

function NavBar() {
  const [nav, setNav] = useState(false);

  const { darkMode, switchMode } = useTheme();

  const handleClick = () => setNav(!nav);

  const handleMode = () => {
    switchMode();
    console.log('switchMode', darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='fixed w-full h-[80px] flex justify-between md:justify-end  items-center px-4 text-neutral-700 bg-stone-50 dark:bg-gray-800 dark:text-neutral-300'>
        {/* -------------Social Links Header------------- */}
        <ul className='md:hidden flex flex-row'>
          <li className='flex justify-center items-center px-0'>
            <div className='flex justify-center items-center w-full text-red-900 dark:text-neutral-300  hover:scale-110 duration-500'>
              <a
                className='flex items-center p-[20px]'
                href='https://www.linkedin.com/in/elen-oz/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </li>

          <li className=' flex items-center px-0'>
            <div className='flex justify-center items-center w-full text-red-900 dark:text-neutral-300  hover:scale-110 duration-500'>
              <a
                className='flex items-center p-[20px]'
                href='https://github.com/elen-oz'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub size={20} />
              </a>
            </div>
          </li>

          <li className=' flex justify-between items-center px-0'>
            <div className='flex justify-center items-center w-full text-red-900 dark:text-neutral-300 hover:scale-110 duration-500'>
              <a
                className='flex items-center p-[20px]'
                href='mailto: ozerova.lenka@gmail.com?subject=Site Portfolio Mail'
              >
                <HiOutlineMail size={20} />
              </a>
            </div>
          </li>
        </ul>

        {/* -------------Header Menu------------- */}
        <ul className='hidden md:flex'>
          <li>
            <Link
              className='hover:border-b-2 hover:border-red-900'
              to='about'
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='hover:border-b-2 hover:border-red-900'
              to='skills'
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className='hover:border-b-2 hover:border-red-900'
              to='work'
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className='hover:border-b-2 hover:border-red-900'
              to='contact'
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center ml-[20px]'>
            <CgDarkMode onClick={handleMode} />
          </div>

          {/* Logo */}
          <div className='hover:cursor-pointer p-[10px] ml-[20px]'>
            <Link
              to='home'
              smooth={true}
              duration={500}
            >
              <img
                src={Logo}
                alt='Logo Image'
                style={{ width: '100px' }}
              />
            </Link>
          </div>

          {/* Hamburger */}
          <div
            onClick={handleClick}
            className='md:hidden z-10 hover:text-red-900 p-[10px]'
          >
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute z-50 top-[80px] right-0 w-1/3 h-screen flex flex-col justify-start items-center bg-stone-200 dark:bg-slate-700 dark:text-neutral-300'
          }
        >
          <li className='py-6 text-3xl hover:text-red-900'>
            <Link
              onClick={handleClick}
              to='home'
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className='py-6 text-3xl hover:text-red-900'>
            <Link
              onClick={handleClick}
              to='about'
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className='py-6 text-3xl hover:text-red-900'>
            <Link
              onClick={handleClick}
              to='skills'
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className='py-6 text-3xl hover:text-red-900'>
            <Link
              onClick={handleClick}
              to='work'
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className='py-6 text-3xl hover:text-red-900'>
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

        {/* Social Icons on the left */}
        <div className='hidden md:flex fixed flex-col top-[35%] md:top-[14%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-50 dark:bg-gray-800 dark:text-neutral-300'>
              <a
                className='flex justify-between items-center w-full'
                href='https://www.linkedin.com/in/elen-oz/'
                target='_blank'
                rel='noreferrer'
              >
                Linlkedin <FaLinkedin size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-50 dark:bg-gray-800 dark:text-neutral-300'>
              <a
                className='flex justify-between items-center w-full'
                href='https://github.com/elen-oz'
                target='_blank'
                rel='noreferrer'
              >
                Github <FaGithub size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-50 dark:bg-gray-800 dark:text-neutral-300'>
              <a
                className='flex justify-between items-center w-full'
                href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-50 dark:bg-gray-800 dark:text-neutral-300'>
              <a
                className='flex justify-between items-center w-full'
                href={Resume}
                download='Elena-O_CV.pdf'
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
