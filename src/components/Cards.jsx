import client from "../assets/client.webp";
import technology from "../assets/technology.webp";
import experience from "../assets/experience.webp";
import innovation from "../assets/innovation.webp";

const Cards = () => {
  return (
    <div className="mt-12 md:pt-16 lg:mt-12 pb-10">
      <div className="flex justify-center items-center text-2xl text-blue">
        <h2 className="font-semibold text-3xl  text-center">
          Why Choose Apex Living <br /> Software Labs
        </h2>
      </div>
      {/* cards */}
      <div className="grid md:grid-cols-2 lg:flex gap-4 mt-6 mx-6 text-sm mb-6">
        <div className="lg:w-1/4 shadow-lg shadow-gray-300  rounded-2xl p-4">
          <div className=" bg-smallPink h-[75px] w-[75px] rounded-lg flex flex-row items-center justify-center">
            <img src={innovation} className="h-[40px] w-[40px]" />
          </div>
          <h3 className="pt-4 text-blue">Innovative Solutions</h3>
          <p className=" font-light mt-2">
            At Apex Living Software Labs, we pride ourselves on our innovative
            approach to problem solving. Our team of experts is dedicated to
            finding unique solutions tailored to your specific needs, ensuring
            that your business stands out in a crowded market.
          </p>
        </div>
        <div className="lg:w-1/4 shadow-lg shadow-gray-300   rounded-2xl p-4">
          <div className=" bg-smallGreen h-[75px] w-[75px] rounded-lg flex flex-row items-center justify-center">
            <img src={experience} className="h-[40px] w-[40px]" />
          </div>
          <h3 className="pt-2 text-blue">Industry Experience</h3>
          <p className=" font-light mt-2">
            With years of experience in the software development industry, we
            have a deep understanding of the challenges businesses face. Our
            team leverages this experience to deliver solutions that are not
            only effective but also practical and scalable, helping your
            business grow and succeed.
          </p>
        </div>
        <div className="lg:w-1/4 shadow-lg shadow-gray-300  rounded-2xl p-4">
          <div className=" bg-smallBlue h-[75px] w-[75px] rounded-lg flex flex-row items-center justify-center">
            <img src={technology} className="h-[40px] w-[40px]" />
          </div>
          <h3 className="pt-2 text-blue">Cutting-Edge Technology</h3>
          <p className=" font-light mt-2">
            We stay at the forefront of technology trends, constantly exploring
            new tools and techniques to deliver the best possible solutions for
            our clients. By choosing Apex Living Software Labs, you can be
            confident that you are getting access to the latest and most
            advanced technology available.
          </p>
        </div>
        <div className="lg:w-1/4 shadow-lg shadow-gray-300  rounded-2xl p-4">
          <div className=" bg-smallPink h-[75px] w-[75px] rounded-lg flex flex-row items-center justify-center">
            <img src={client} className="h-[40px] w-[40px]" />
          </div>
          <h3 className="pt-4 text-blue">Client-Centric Approach</h3>
          <p className=" font-light mt-2 ">
            At Apex Living Software Labs, our clients are our top priority. We
            work closely with you to understand your unique challenges and
            goals, ensuring that the solutions we provide are tailored to meet
            your specific needs. With us, you are not just another client – you
            are a partner in success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
