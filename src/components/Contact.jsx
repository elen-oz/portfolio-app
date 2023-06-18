const Contact = () => {
  return (
    <div
      name='contact'
      className='container max-w-[900px] h-screen flex flex-col justify-center items-center mx-auto'
    >
      <form
        method='POST'
        action='https://getform.io/f/21360c24-1f34-4019-8448-c3a4edffd8e2'
        className='flex flex-col max-w-[600px] w-full my-0'
      >
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-900'>Contact</p>
          <p className='py-4'>&#47;&#47; Submit the form below to contact me</p>
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
          rows='7'
          placeholder='Message'
        ></textarea>
        <button className='text-red-900 border-2 border-red-900 hover:bg-red-900 hover:text-white hover:border-red-900 px-4 py-3 my-8 mx-auto flex items-center'>
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
