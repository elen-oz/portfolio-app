import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo_dark1.png';

function NavBar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-stone-100 text-stone-500'>
      <div>
        <img
          src={Logo}
          alt='Logo Image'
          style={{ width: '150px' }}
        />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div className='md:hidden'>
        <FaBars />
      </div>

      {/* mobile menu */}
      <ul className='absolute top-0 left-0 h-screen bg-stone-100 flex flex-col justify-center items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden'></div>
    </div>
  );
}

export default NavBar;
