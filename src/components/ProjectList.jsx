import { useState } from 'react';
import data from '../data/data';
import { useTheme } from '../hooks/useTheme';
import ModalProject from './ModalProject';

const ProjectList = () => {
  const { darkMode } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (item) => {
    setShowModal(true);
    setSelectedProject(item);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        name='work'
        className='w-full md:h-screen dark:bg-sky-950 dark:text-neutral-300'
      >
        <div className='container max-w-[900px] mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-red-900'>Work</p>
            <p className='py-6'>&#47;&#47; Check out some of my recent work</p>
          </div>

          {/* container for projects */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* ---grid item--- */}
            {data.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className='content-div group container mx-auto flex items-center justify-center rounded-md px-2 py-5 text-center shadow-lg shadow-[#dcdcdc] aspect-video group relative'
              >
                {/* hover effects for images */}
                <div className='opacity-0 transition after:rounded-md after:transition-all after:duration-300 group-hover:opacity-100'>
                  <div className='backdrop-blur-xl p-2 rounded-md transition transition-all duration-300'>
                    <span className='text-xl font bold text-neutral-700 tracking-wider '>
                      {item.name}
                    </span>

                    <div className='text-center'>
                      <button
                        onClick={() => handleClick(item)}
                        className='text-center rounded-sm px-1 py-1 m-2
                 bg-white text-neutral-700 font-bold text-base'
                      >
                        Show More
                      </button>

                      <a
                        href={item.live}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <button
                          className='text-center rounded-sm px-1 py-1 m-2
                          bg-red-900 text-neutral-100 font-bold text-base'
                        >
                          Live
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                {showModal ? (
                  <ModalProject
                    showModal={showModal}
                    setShowModal={setShowModal}
                    project={selectedProject}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
