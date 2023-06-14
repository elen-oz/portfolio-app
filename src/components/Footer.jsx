const Footer = () => {
  return (
    <div className='w-full  bg-neutral-50 text-neutral-600 flex justify-center items-center pb-4'>
      <ul className='flex'>
        <li>Elena Ozerova &copy;</li>
        <li>{new Date().getFullYear()}</li>
      </ul>
    </div>
  );
};

export default Footer;
