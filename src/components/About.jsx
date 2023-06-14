import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-neutral-50 text-neutral-800'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-900'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p className='text-neutral-600'>
              Hi, I'm Elena, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Passionate and dedicated frontend developer with 11-month course completion and
              ongoing skill development. Expertise in React, JavaScript, ensuring efficient and
              effective development. Let's collaborate and create stunning digital applications!
              Contact me now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
{
  /* colors:
  bg-neutral-50

  #7f1d1d -- red-900
  text-neutral-800
  text-neutral-600
   */
}
