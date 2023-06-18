import { useTheme } from '../hooks/useTheme';
import data from '../data/data';

const Work = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        name='work'
        className='w-full md:h-screen dark:bg-sky-950 dark:text-neutral-300'
      >
        {/* container */}
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
                className='shadow-lg shadow-[#dcdcdc] dark:shadow-gray-900 group container rounded-sm flex justify-center text-center items-center mx-auto content-div px-2 py-5'
              >
                {/* hover effects for images */}
                <div className='opacity-0 group-hover:opacity-50 transition'>
                  <span className='text-xl font bold text-white tracking-wider '>{item.name}</span>
                  <div className='text-center'>
                    <a
                      href={item.github}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <button
                        className='text-center rounded-sm px-1 py-1 m-2
                       bg-white text-gray-700 font-bold text-base'
                      >
                        Code
                      </button>
                    </a>

                    <a
                      href={item.live}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <button
                        className='text-center rounded-sm px-1 py-1 m-2
                       bg-white text-gray-700 font-bold text-base'
                      >
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
