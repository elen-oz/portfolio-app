const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-neutral-50 text-neutral-800'
    >
      {/* container-- */}
      <div className='container flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-red-900'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold'>
            <p className='text-neutral-600'>
              Hi, I&apos;m Elena, nice to meet you. Please take a look around.
            </p>
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
  );
};

export default About;
