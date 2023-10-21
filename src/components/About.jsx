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
              <p className='text-4xl font-bold inline border-b-4 border-red-700'>About</p>
            </div>
            <div></div>
          </div>
          <div className='w-full grid sm:grid-cols-2 gap-8'>
            <div className='sm:text-right text-3xl font-bold'>
              <p className='text-neutral-500'>
                Hi, I&apos;m <strong>Elena Ozerova</strong>, nice to meet you.
              </p>
            </div>
            <div>
              <p>
                Frontend developer with over a year of self-study in frontend development. Currently
                enhancing my skills at&nbsp;<strong>Hyper Island</strong>&apos;s&nbsp;program.
                Proficient in&nbsp;<em>React</em> and <em>JavaScript</em>, I&apos;m dedicated to
                delivering top-quality solutions.
                <br />
                <br />
                Eager for new opportunities and collaborations, let&apos;s create exceptional
                digital applications together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
