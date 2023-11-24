import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import ProjectList from './ProjectList';
import data from '../data/data';
import mainStyles from '../styles/Main.module.css';
import styles from './Work.module.css';

const Work = () => {
  // turn it on when turn on the firebase
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? mainStyles.darkTheme : ''}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <ProjectList data={data} />}
    </div>
  );
};

export default Work;
