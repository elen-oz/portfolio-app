import { useTheme } from '../hooks/useTheme';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        name='about'
        className='w-full h-screen dark:bg-gray-800 dark:text-neutral-300'
      >
        {/* container-- */}
        <div className='container max-w-[900px] mx-auto flex flex-col justify-center items-center w-full h-full'>
          <div className='w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 '>
              <p className='text-4xl font-bold inline border-b-4 border-red-900'>About</p>
            </div>
            <div></div>
          </div>
          <div className='w-full grid sm:grid-cols-2 gap-8'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-neutral-500'>Hi, I&apos;m Elena, nice to meet you.</p>
            </div>
            <div>
              <p>
                Passionate and dedicated frontend developer with 11-month course completion and
                ongoing skill development. Expertise in React, JavaScript, ensuring efficient and
                effective development. Let&apos;s collaborate and create stunning digital
                applications!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
