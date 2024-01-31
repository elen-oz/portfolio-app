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
        <li>
          <a
            href='https://www.notion.so/Portfolio-of-Elena-bbfdf9a7e6c54669829923d14b6cd7f6?pvs=4'
            target='_blank'
            rel='noreferrer'
          >
            Notion
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
