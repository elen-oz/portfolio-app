import data from '../data/data';

const Work = () => {
  const projects = data;

  return (
    <div
      name='work'
      className='w-full md:h-screen bg-neutral-50 text-neutral-800'
    >
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl fonr-bold inline border-b-4 text-neutral-800 border-red-900'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* ---grid item--- */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className='shadow-lg shadow-[#dcdcdc] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
            >
              {/* hover effects for images */}
              <div className='opacity-0 group-hover:opacity-50 transition'>
                <span className='text-2xl font bold text-white tracking-wider '>{item.name}</span>
                <div className='pt-8 text-center '>
                  {/* eslint-disable-next-line */}
                  <a
                    href={item.github}
                    target='_blank'
                  >
                    <button
                      className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a
                    href={item.live}
                    target='_blank'
                  >
                    <button
                      className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'
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
  );
};

export default Work;
{
  /* colors:
  bg-neutral-50

  #7f1d1d -- red-900
  text-neutral-800
  text-neutral-600

  shadow-[#dcdcdc] 
   */
}
