import project from "../assets/project.png";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row pt-16">
      <div className="flex flex-col p-2 pt-[10%] ">
        <div className="px-4">
          <h2 className=" text-4xl pt-16 text-blue">
            We help you to build your business.
          </h2>
        </div>
        <div className=" pt-6 px-4">
          <p className="text-blue max-w-md">
            Experience the synergy of creativity and technology at Apex Living
            Software Labs, where innovation meets implementation. Explore
            groundbreaking solutions that redefine possibilities and propel your
            ideas to new heights.
          </p>
        </div>
        <div className="pt-6 md:pt-4 lg:pt-6 px-4">
          <button className=" bg-gradient-to-r from-blue to-orange text-white px-6 py-2 rounded-2xl">
            Request a quotation
          </button>
        </div>
      </div>
      <div className="object-cover pt-[10%] px-16 ">
        <img src={project} alt={project} />
      </div>
    </div>
  );
};

export default Main;
