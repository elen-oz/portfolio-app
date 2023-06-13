import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div
      name='home'
      className='w-full h-screen bg-stone-50'
    >
      {/* comtainer */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-900'>Hi, my name is</p>
        <h1 className='text-neutral-800 text-4xl sm:text-7xl font-bold '>Elena</h1>
        <h2 className='text-neutral-600 text-4xl sm:text-7xl font-bold '>
          I'm a Frontend Developer
        </h2>
        <p className='text-neutral-600 py-4 max-w-[700px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repel repudiandae, dolorem ea?
        </p>
        <div>
          <button className='text-neutral-800 group border-2 px-6 py-3 my-2 flex items-center border-red-900 hover:text-stone-50 hover:bg-red-900 hover:border-red-900'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
{
  /* colors:
  bg-neutral-50

  #7f1d1d -- red-900
  text-neutral-800
  text-neutral-600

  #CCb91c1c -- red-700
   */
}
