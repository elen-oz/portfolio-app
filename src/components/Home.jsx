import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div
      name='home'
      className='w-full h-screen'
    >
      {/* container */}
      <div className='container max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-red-900'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold '>Elena</h1>
        <h2 className='text-neutral-600 text-4xl sm:text-7xl font-bold '>
          I&apos;m a Frontend Developer
        </h2>
        <p className='text-neutral-600 py-4 max-w-[700px]'>
          An enthusiastic Frontend Developer based in Stockholm, Sweden.
        </p>
        <div>
          <button className='group border-2 px-6 py-3 my-2 flex items-center border-red-900 hover:text-stone-50 hover:bg-red-900 hover:border-red-900'>
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
