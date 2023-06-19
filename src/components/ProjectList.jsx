import { useState } from 'react';
import data from '../data/data';
import { useTheme } from '../hooks/useTheme';

const ProjectList = () => {
  const { darkMode } = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        name='work'
        className='w-full md:h-screen dark:bg-sky-950 dark:text-neutral-300'
      >
        <div className='container max-w-[900px] mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-red-900'>Work</p>
            <p className='py-6'>&#47;&#47; Check out some of my recent work</p>
          </div>

          {/* container for projects */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* ---grid item--- */}
            {data.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className='shadow-lg shadow-[#dcdcdc] dark:shadow-gray-900 group container rounded-sm flex justify-center text-center items-center mx-auto content-div px-2 py-5'
              >
                {/* hover effects for images */}
                <div className='opacity-0 group-hover:opacity-50 transition'>
                  <span className='text-xl font bold text-white tracking-wider '>{item.name}</span>
                  <div className='text-center'>
                    {/* <a
                      href={item.github}
                      target='_blank'
                      rel='noreferrer'
                    > */}
                    <button
                      onClick={() => setShowModal(true)}
                      className='text-center rounded-sm px-1 py-1 m-2
                 bg-white text-gray-700 font-bold text-base'
                    >
                      Code
                    </button>
                    {/* </a> */}

                    {showModal ? (
                      <>
                        <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                          <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            {/*content*/}
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                              {/*header*/}
                              <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                                <h3 className='text-3xl font-semibold'>Modal Title</h3>
                                <button
                                  className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                                    ×
                                  </span>
                                </button>
                              </div>
                              {/*body*/}
                              <div className='relative p-6 flex-auto'>
                                <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                                  I always felt like I could do anything. That’s the main thing
                                  people are controlled by! Thoughts- their perception of
                                  themselves! They're slowed down by their perception of themselves.
                                  If you're taught you can’t do anything, you won’t do anything. I
                                  was taught I could do everything.
                                </p>
                              </div>
                              {/*footer*/}
                              <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                                <button
                                  className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                  type='button'
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </button>
                                <button
                                  className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                  type='button'
                                  onClick={() => setShowModal(false)}
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                      </>
                    ) : null}

                    <a
                      href={item.live}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <button
                        className='text-center rounded-sm px-1 py-1 m-2
                 bg-white text-gray-700 font-bold text-base'
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
    </div>
  );
};

export default ProjectList;
