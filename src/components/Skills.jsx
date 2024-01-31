import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';

import mainStyles from '../styles/Main.module.css';
import styles from './Skills.module.css';

// import Firebase from '../assets/firebase.png';
// import Node from '../assets/node.png';
// import Mongo from '../assets/mongo.png';
// import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    // <div className={darkMode ? mainStyles.darkTheme : ''}>
    <div name='skills' className={mainStyles.section}>
      <div className={mainStyles.container}>
        <div>
          <p className={mainStyles.title}>Skills</p>
          <p className={mainStyles.subtitle}>
            &#47;&#47; These are the technologies I&apos;ve worked with
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.item}>
            <img className={styles.itemImg} src={Html} alt='HTML icon' />
            <p className={styles.itemText}>html</p>
          </div>

          <div className={styles.item}>
            <img className={styles.itemImg} src={Css} alt='CSS icon' />
            <p className={styles.itemText}>css</p>
          </div>

          <div className={styles.item}>
            <img
              className={styles.itemImg}
              src={Javascript}
              alt='JavaScript icon'
            />
            <p className={styles.itemText}>javascript</p>
          </div>

          <div className={styles.item}>
            <img className={styles.itemImg} src={ReactImg} alt='React icon' />
            <p className={styles.itemText}>react.js</p>
          </div>

          <div className={styles.item}>
            <img className={styles.itemImg} src={Github} alt='GitHub icon' />
            <p className={styles.itemText}>github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
