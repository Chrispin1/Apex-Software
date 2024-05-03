const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 lg:px-0 py-20">
      <div className="w-full mx-auto flex flex-col justify-center items-center bg-slate-200 rounded-lg px-3 py-6">
        <div>
          <h2 className="text-xl font-semibold text-blue">Get a Quote</h2>
          <p className="font-light capitalize text-gray-600">
            Shoot us a message
          </p>
        </div>
        <div className="pt-10 flex flex-col gap-2 w-full lg:w-[60%]">
          <div className="flex flex-col gap-1">
            <p className="font-light text-xl">Email</p>
            <input
              type="text"
              placeholder="Your Email"
              className="w-full  bg-slate-200 border border-gray-400 rounded-md p-2 outline-none"
            />
          </div>
          <div>
            <p className="font-light text-xl">Message</p>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="bg-slate-200 border border-gray-400 p-2 rounded-md w-full outline-none"></textarea>
          </div>
          <div>
            <button className="bg-blue text-white py-2 px-6 text-center rounded-md">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
