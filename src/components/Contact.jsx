import { useTheme } from '../hooks/useTheme';
import mainStyles from '../styles/Main.module.css';
import styles from './Contact.module.css';

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? mainStyles.darkTheme : ''}>
      <div className={`${mainStyles.section} ${mainStyles.last}`}>
        <div name='contact' className={mainStyles.container}>
          <form
            method='POST'
            action='https://getform.io/f/21360c24-1f34-4019-8448-c3a4edffd8e2'
            className={styles.form}
            autoComplete='off'
          >
            <div>
              <p className={mainStyles.title}>Contact</p>
              <p className={mainStyles.subtitle}>
                &#47;&#47; Submit the form below to contact me
              </p>
            </div>
            {/* {darkMode ? mainStyles.darkTheme : ''} */}
            <input
              className={darkMode ? styles.darkThemeForm : styles.form}
              type='text'
              placeholder='Name'
              name='name'
            />
            <input
              className={darkMode ? styles.darkThemeForm : styles.form}
              type='email'
              placeholder='Email'
              name='email'
            />
            <textarea
              className={darkMode ? styles.darkThemeForm : styles.form}
              name='message'
              rows='7'
              placeholder='Message'
            ></textarea>
            <div className={styles.btnContainer}>
              <button className={mainStyles.button}>
                Let&apos;s Collaborate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
