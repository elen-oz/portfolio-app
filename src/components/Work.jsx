import { useTheme } from '../hooks/useTheme';
import ProjectList from './ProjectList';

const Work = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <ProjectList />
    </div>
  );
};

export default Work;
