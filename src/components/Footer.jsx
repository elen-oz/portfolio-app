import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li>Elena Ozerova &copy;</li>
        <li>{new Date().getFullYear()}</li>
      </ul>
    </div>
  );
};

export default Footer;
