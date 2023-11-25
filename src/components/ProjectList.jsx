import { useState } from 'react';
import data from '../data/data';
import { useTheme } from '../hooks/useTheme';
import ModalProject from './ModalProject';

import mainStyles from '../styles/Main.module.css';
import styles from './ProjectList.module.css';

const ProjectList = () => {
  const { darkMode } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (item) => {
    setShowModal(true);
    setSelectedProject(item);
  };

  return (
    <div className={darkMode ? mainStyles.darkTheme : ''}>
      <div name='work' className={mainStyles.section}>
        <div className={mainStyles.container}>
          <div>
            <p className={mainStyles.title}>Work</p>
            <p className={mainStyles.subtitle}>
              &#47;&#47; Check out some of my recent work
            </p>
          </div>

          {/* container for projects */}
          <div className={styles.projectsContainer}>
            {/* ---grid item--- */}
            {data.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className={styles.projectItem}
              >
                {/* hover effects for images */}
                <div className={styles.hoverItem}>
                  <div className={styles.itemContent}>
                    <span className={styles.name}>{item.name}</span>

                    <div className={styles.buttonContainer}>
                      <button
                        onClick={() => handleClick(item)}
                        className={styles.button}
                      >
                        Show More
                      </button>

                      {item.live && (
                        <a href={item.live} target='_blank' rel='noreferrer'>
                          <button className={styles.live}>Live</button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showModal ? (
            <ModalProject
              setShowModal={setShowModal}
              project={selectedProject}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
