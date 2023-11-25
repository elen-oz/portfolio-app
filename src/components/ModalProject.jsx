import parse from 'html-react-parser';
// import mainStyles from '../styles/Main.module.css';
import styles from './ModalProject.module.css';

const ModalProject = ({ setShowModal, project }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {/*content*/}
          <div className={styles.content}>
            {/*header*/}
            <div className={styles.header}>
              <h3 className={styles.title}>Project: {project.name}</h3>
              <button
                className={styles.closeButtonCrossSign}
                onClick={() => setShowModal(false)}
              >
                <span className={styles.crossSign}>×</span>
              </button>
            </div>
            {/*body*/}
            <div className={styles.contentContainer}>
              <img src={project.image} />
              <p className={styles.projectDescription}>
                {parse(project.description)}
              </p>
            </div>
            {/*footer*/}
            <div className={styles.modalFooter}>
              <div>
                <a href={project.github} target='_blank' rel='noreferrer'>
                  <button
                    className={`${styles.modalButton} ${styles.buttonGithub}`}
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    GitHub
                  </button>
                </a>

                {project.live && (
                  <a href={project.live} target='_blank' rel='noreferrer'>
                    <button
                      className={`${styles.modalButton} ${styles.buttonLive}`}
                      onClick={() => setShowModal(false)}
                    >
                      Live
                    </button>
                  </a>
                )}
              </div>
              <button
                className={`${styles.modalButton} ${styles.closeButton}`}
                type='button'
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-50 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default ModalProject;
