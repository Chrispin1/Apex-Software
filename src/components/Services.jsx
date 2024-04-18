import image1 from "../assets/img-1.png";
import UIUX from "../assets/UI-UX.png";
import cloud from "../assets/Cloud.webp";
import data from "../assets/data.png";
import AI from "../assets/AI.png";

const Services = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-r from-blueApex to-orangeApex min-h-screen">
      <div>
        <h2 className="text-blue text-2xl">Services.</h2>
        <p className="uppercase font-light text-gray-600 text-sm">What we do</p>
      </div>

      {/* CARD 1 */}

      <div className="pt-16 px-12 grid grid-cols-1 gap-4 lg:gap-10 w-full lg:grid lg:grid-cols-2 items-center">
        <div className="w-full lg:w-[70%]">
          <h2 className="font-semibold text-blue text-2xl">
            Custom Software Development
          </h2>
          <p className="pt-2 font-light text-gray-600 mx-auto ">
            Our custom software solutions are meticulously crafted to fit your
            business like a glove. Designed with precision and care, these
            solutions are more than just software – they‘re tailored experiences
            that boost efficiency, productivity, and profitability. With our
            bespoke software, you‘ll have the tools you need to tackle any
            challenge and seize every opportunity that comes your way.
          </p>
        </div>
        <div className="lg:w-[492px] lg:h-[492px] mx-auto">
          <img src={image1} alt="image1" />
        </div>
      </div>

      {/* CARD 2 */}

      <div className="grid grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="mx-auto lg:mx-0 order-last lg:order-first">
          <img src={UIUX} alt="UIUX" />
        </div>
        <div className="w-full lg:w-[70%] lg:ml-16">
          <h2 className="font-semibold text-2xl text-blue">
            Mobile Application Development
          </h2>
          <p className="mt-2 font-light text-gray-600 mx-auto">
            Elevate your brand with our captivating mobile apps, designed to
            engage users and keep your business at their fingertips, wherever
            they go. Our mobile solutions are more than just apps – they‘re
            powerful tools that help you connect with your audience, drive
            engagement, and increase brand loyalty. With our mobile magic,
            you‘ll be able to reach new heights and make a lasting impression on
            your customers.
          </p>
        </div>
      </div>

      {/* card 3*/}
      <div className="pt-16 px-12 grid grid-cols-1 gap-4 lg:gap-10 w-full lg:grid lg:grid-cols-2 items-center">
        <div className="w-full lg:w-[70%]">
          <h2 className="font-semibold text-blue text-2xl">Cloud Solutions</h2>
          <p className="pt-2 font-light text-gray-600 mx-auto ">
            Experience the freedom of scalable and secure cloud solutions,
            providing a reliable backbone for your business to soar to new
            heights. Our cloud solutions are more than just storage – they‘re a
            complete ecosystem that empowers your business to innovate,
            collaborate, and grow. With our cloud nirvana, you‘ll have the
            flexibility and agility you need to stay ahead of the competition
            and achieve your goals.
          </p>
        </div>
        <div className="lg:w-[492px] lg:h-[492px] mx-auto">
          <img src={cloud} alt="image1" />
        </div>
      </div>

      {/* card 4 */}
      <div className="grid grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="mx-auto lg:mx-0 order-last lg:order-first">
          <img src={data} alt="UIUX" />
        </div>
        <div className="w-full lg:w-[70%] lg:ml-16">
          <h2 className="font-semibold text-2xl text-blue">
            Data Analytics, forecasting and prediction
          </h2>
          <p className="mt-2 font-light text-gray-600 mx-auto">
            Turn raw data into gold with our powerful analytics services,
            uncovering insights that drive smart decisions and propel your
            business forward. Our data alchemy is more than just analytics –
            it‘s a transformative process that helps you understand your
            business better, identify new opportunities, and make data-driven
            decisions with confidence. With our data alchemy, you‘ll be able to
            unlock the full potential of your data and achieve new levels of
            success.
          </p>
        </div>
      </div>

      {/* card 5 */}
      <div className="pt-16 px-12 grid grid-cols-1 gap-4 lg:gap-10 w-full lg:grid lg:grid-cols-2 items-center">
        <div className="w-full lg:w-[70%]">
          <h2 className="font-semibold text-blue text-2xl">
            AI and Machine Learning
          </h2>
          <p className="pt-2 font-light text-gray-600 mx-auto ">
            Unlock the potential of AI and machine learning with our advanced
            services, automating processes and unlocking new insights for your
            business to thrive. Our AI innovators are more than just algorithms
            – they‘re a team of experts who are dedicated to helping you harness
            the power of AI to drive innovation, streamline operations, and
            unlock new opportunities. With our AI innovators, you‘ll be able to
            stay ahead of the curve and lead the way in AI-driven innovation.
          </p>
        </div>
        <div className="lg:w-[492px] lg:h-[492px] mx-auto">
          <img src={AI} alt="image1" />
        </div>
      </div>
    </div>
  );
};

export default Services;
