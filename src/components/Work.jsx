import { useState } from 'react';
import ProjectList from './ProjectList';
import data from '../data/data';
import styles from './Work.module.css';

const Work = () => {
  // turn it on when turn on the firebase
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {isPending && <p className={styles.loading}>Loading...</p>}
      {data && <ProjectList data={data} />}
    </>
  );
};

export default Work;
