import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';

// import Firebase from '../assets/firebase.png';
// import Node from '../assets/node.png';
// import Mongo from '../assets/mongo.png';
// import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full h-screen'
    >
      {/* container */}
      <div className='container max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-900'>Skills</p>
          <p className='py-4'>&#47;&#47; These are the technologies I&apos;ve worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#dcdcdc] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={Html}
              alt='HTNL icon'
            />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#dcdcdc] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={Css}
              alt='CSS icon'
            />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#dcdcdc] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={Javascript}
              alt='JavaScript icon'
            />
            <p className='my-4'>JAVASCRIPT</p>
          </div>

          <div className='shadow-md shadow-[#dcdcdc] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={ReactImg}
              alt='React icon'
            />
            <p className='my-4'>REACT</p>
          </div>

          <div className='shadow-md shadow-[#dcdcdc] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={Github}
              alt='GitHub icon'
            />
            <p className='my-4'>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
