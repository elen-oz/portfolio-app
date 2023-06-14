import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

import Logo from '../assets/logo_dark2.png';

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-neutral-50 text-neutral-700'>
      {/* logo */}
      <div className='hover:cursor-pointer p-[10px] ml-[20px]'>
        <Link
          to='home'
          smooth={true}
          duration={500}
        >
          <img
            className=' mt-[40px]'
            src={Logo}
            alt='Logo Image'
            style={{ width: '100px' }}
          />
        </Link>
      </div>

      {/* menu */}
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

      {/* hamburger */}
      <div
        onClick={handleClick}
        className='md:hidden z-10 hover:text-red-900'
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-neutral-50 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:text-red-900'>
          <Link
            onClick={handleClick}
            to='home'
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-red-900'>
          <Link
            onClick={handleClick}
            to='about'
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-red-900'>
          <Link
            onClick={handleClick}
            to='skills'
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-red-900'>
          <Link
            onClick={handleClick}
            to='work'
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-red-900'>
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

      {/* social icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] md:top-[14%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-neutral-50'>
            <a
              className='flex justify-between items-center w-full text-red-900'
              href='https://www.linkedin.com/in/elen-oz/'
              target='_blank'
              rel='noreferrer'
            >
              Linlkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-neutral-50'>
            <a
              className='flex justify-between items-center w-full text-red-900'
              href='https://github.com/elen-oz'
              target='_blank'
              rel='noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-neutral-50'>
            <a
              className='flex justify-between items-center w-full text-red-900'
              href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          {/* ! WARN: does not work -- check it */}

          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-neutral-50'>
            <a
              className='flex justify-between items-center w-full text-red-900'
              href='../assets/Elena-O_CV.pdf'
              target='_blank'
              download='Elena-O_CV.pdf'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
