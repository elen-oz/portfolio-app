import { useRef, useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const sections = useRef([]);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = (event) => {
    if (isScrolling) return;

    event.preventDefault();

    const currentSectionIndex = sections.current.findIndex(
      (section) => section.getBoundingClientRect().top >= 0
    );

    let targetSectionIndex;

    if (event.deltaY > 0) {
      // Up
      targetSectionIndex = Math.min(currentSectionIndex + 1, sections.current.length - 1);
    } else {
      // Down
      targetSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    window.scrollTo({
      top: sections.current[targetSectionIndex].offsetTop,
      behavior: 'smooth',
    });

    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
    }, 1200);
  };

  return (
    <div onWheel={handleWheel}>
      <NavBar />
      <div ref={(el) => (sections.current[0] = el)}>
        <Home />
      </div>
      <div ref={(el) => (sections.current[1] = el)}>
        <About />
      </div>
      <div ref={(el) => (sections.current[2] = el)}>
        <Skills />
      </div>
      <div ref={(el) => (sections.current[3] = el)}>
        <Work />
      </div>
      <div ref={(el) => (sections.current[4] = el)}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
