import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <a href='https://github.com/elen-oz' target='_blank' rel='noreferrer'>
            Elena Ozerova &copy;
          </a>
        </li>
        <li>{new Date().getFullYear()}</li>
      </ul>
    </div>
  );
};

export default Footer;
