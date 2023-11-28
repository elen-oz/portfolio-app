import { useTheme } from '../src/hooks/useTheme';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

import mainStyles from '../src/styles/Main.module.css';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? mainStyles.darkTheme : ''}>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
