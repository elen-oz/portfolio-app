import WorkImg1 from '../assets/projects/rss.png';
import WorkImg2 from '../assets/projects/dojo.png';

const Work = () => {
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
          {/* grid item */}
          <div
            style={{ background: `url(${WorkImg1})` }}
            className='shadow-lg shadow-[#dcdcdc] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
          >
            {/* hover effects for images */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JavaScript Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://frontend-project-11-01.vercel.app/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/elen-oz/rss-aggregator'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ background: `url(${WorkImg2})` }}
            className='shadow-lg shadow-[#dcdcdc] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
          >
            {/* hover effects for images */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.js Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://thedojosite-355e3.web.app/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/elen-oz/the-dojo'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ background: `url(${WorkImg1})` }}
            className='shadow-lg shadow-[#dcdcdc] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
          >
            {/* hover effects for images */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JavaScript Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://frontend-project-11-01.vercel.app/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/elen-oz/rss-aggregator'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ background: `url(${WorkImg2})` }}
            className='shadow-lg shadow-[#dcdcdc] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
          >
            {/* hover effects for images */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.js Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://thedojosite-355e3.web.app/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/elen-oz/the-dojo'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ background: `url(${WorkImg1})` }}
            className='shadow-lg shadow-[#dcdcdc] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
          >
            {/* hover effects for images */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JavaScript Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://frontend-project-11-01.vercel.app/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/elen-oz/rss-aggregator'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ background: `url(${WorkImg2})` }}
            className='shadow-lg shadow-[#dcdcdc] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
          >
            {/* hover effects for images */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.js Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://thedojosite-355e3.web.app/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/elen-oz/the-dojo'
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
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
