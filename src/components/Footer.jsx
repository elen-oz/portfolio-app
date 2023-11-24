import mainStyles from '../styles/Main.module.css';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className='w-full h-[3rem] bg-stone-200 text-neutral-600 flex justify-center items-center'>
      <ul className='flex'>
        <li>Elena Ozerova &copy;</li>
        <li>{new Date().getFullYear()}</li>
      </ul>
    </div>
  );
};

export default Footer;
