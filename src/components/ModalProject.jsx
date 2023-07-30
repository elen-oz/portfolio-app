import parse from 'html-react-parser';

const ModalProject = ({ setShowModal, project }) => {
  return (
    <>
      <div className='justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-bold'>Project: {project.name}</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setShowModal(false)}
              >
                <span className='bg-transparent text-neutral-700 h-6 w-6 text-2xl block'>×</span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <img src={project.image} />
              <p className='my-4 text-neutral-600 text-lg leading-relaxed text-left'>
                {parse(project.description)}
              </p>
            </div>
            {/*footer*/}

            <div className='flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b'>
              <div>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                >
                  <button
                    className='bg-neutral-600  text-white active:bg-neutral-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-neutral-800 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    GitHub
                  </button>
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button
                      className='bg-red-900 text-white active:bg-neutral-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-red-950 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setShowModal(false)}
                    >
                      Live
                    </button>
                  </a>
                )}
              </div>
              <button
                className='text-gray-700 rounded background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none hover:bg-neutral-200 mr-1 mb-1 ease-linear transition-all duration-150 active:bg-neutral-400'
                type='button'
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-50 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default ModalProject;
