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
            <p>Hi, I'm Elena, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus vitae
              exercitationem nobis quasi maxime dicta expedita recusandae minima excepturi nesciunt
              pariatur aperiam ex, quod sit est, dolorum voluptas! Consequuntur, beatae!
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
