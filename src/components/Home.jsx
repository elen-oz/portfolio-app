import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        name='home'
        className='w-full h-screen dark:bg-gray-800 dark:text-neutral-300'
      >
        {/* container */}
        <div className='container max-w-[900px] mx-auto flex flex-col justify-center h-full'>
          <p className='text-red-700 text-xl'>Hi! I am</p>
          <h1 className='text-4xl sm:text-7xl font-bold'>Elena</h1>
          <h2 className='text-neutral-500 text-4xl sm:text-7xl font-bold '>
            and I love programming
          </h2>
          <p className='py-4 max-w-[700px]'>
            An enthusiastic Frontend Developer based in Stockholm, Sweden.
          </p>
          <div>
            <Link
              to='work'
              smooth={true}
              duration={500}
            >
              <button className='group border-2 px-6 py-3 my-2 flex items-center border-red-700 hover:text-stone-50 hover:bg-red-700 hover:border-red-700'>
                View Work
                <HiArrowNarrowRight className='ml-3' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
