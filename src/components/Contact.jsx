import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-[calc(100vh-80px)] bg-neutral-50 text-neutral-800 flex flex-col justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/21360c24-1f34-4019-8448-c3a4edffd8e2'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 border-red-900'>Contact</p>
          <p className='py-4'>// Submit the form below to contact me</p>
        </div>
        <input
          className='my-2 p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-2 p-2'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='my-2 p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-red-900 border-2 border-red-900 hover:bg-red-900 hover:text-white hover:border-red-900 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>

      <div className='pt-[50px]'>
        <ul className='flex flex-row'>
          <li className='w-[200px] h-[90px] flex justify-between items-center bg-neutral-50'>
            <div className='flex justify-center items-center w-full text-red-900  hover:scale-110 duration-500'>
              <a
                className='flex items-center p-[10px]'
                href='https://www.linkedin.com/in/elen-oz/'
                target='_blank'
                rel='noreferrer'
              >
                Linlkedin
                <FaLinkedin
                  size={30}
                  className='ml-[20px]'
                />
              </a>
            </div>
          </li>

          <li className='w-[200px] h-[90px] flex items-center  bg-neutral-50'>
            <div className='flex justify-center items-center w-full text-red-900  hover:scale-110 duration-500'>
              <a
                className='flex items-center p-[10px]'
                href='https://github.com/elen-oz'
                target='_blank'
                rel='noreferrer'
              >
                Github
                <FaGithub
                  size={30}
                  className='ml-[20px]'
                />
              </a>
            </div>
          </li>

          <li className='w-[200px] h-[90px] flex justify-between items-center  bg-neutral-50'>
            <div className='flex justify-center items-center w-full text-red-900  hover:scale-110 duration-500'>
              <a
                className='flex items-center p-[10px]'
                href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'
              >
                mail
                <HiOutlineMail
                  size={30}
                  className='ml-[20px]'
                />
              </a>
            </div>
          </li>

          {/* ! WARN: does not work -- check it */}

          {/* <li className='w-[200px] h-[90px] flex justify-between items-center  bg-neutral-50'>
            <a
              className='flex justify-around  items-center w-full text-red-900'
              href='../assets/Elena-O_CV.pdf'
              target='_blank'
              download='Elena-O_CV.pdf'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
