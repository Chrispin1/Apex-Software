import crony from "../assets/crony.webp";
import apex from "../assets/apexliving.webp";
import dash from "../assets/dash.webp";
import digi from "../assets/digi.webp";
import fastroute from "../assets/fastroute.webp";
import furniture from "../assets/furniture.webp";
import gadget from "../assets/gadget.webp";
import turide from "../assets/turide.webp";
import uzuri from "../assets/uzuri.webp";
import wavegrid from "../assets/wavegrid.webp";
import driver from "../assets/driver.webp";
import herot from "../assets/herot.webp";

const Portfolio = () => {
  return (
    <div>
      <div className="px-6 py-16">
        <h2 className="text-blue font-semibold text-2xl">Portfolio</h2>
        <p className="uppercase font-light text-sm pt-2 text-gray-500">
          What we have done
        </p>
        <div className="flex items-center md:justify-end pt-2 px-2">
          <ul className="flex flex-row items-center gap-4 font-light text-gray-600 ">
            <li className="hover:text-orange hover:underline cursor-pointer duration-500 ease-in-out">
              All
            </li>
            <li className="hover:text-orange hover:underline cursor-pointer duration-500 ease-in-out">
              Web
            </li>
            <li className="hover:text-orange hover:underline cursor-pointer duration-500 ease-in-out">
              Mobile
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 cursor-pointer pt-4">
          <img src={crony} alt="crony" className="object-cover w-full h-full" />
          <img src={apex} alt="apex" className="object-cover w-full h-full" />
          <img src={dash} alt="apex" className="object-cover w-full h-full" />
          <img src={digi} alt="apex" className="object-cover w-full h-full" />

          <img
            src={fastroute}
            alt="apex"
            className="object-cover w-full h-full"
          />
          <img
            src={furniture}
            alt="apex"
            className="object-cover w-full h-full"
          />
          <img src={gadget} alt="apex" className="object-cover w-full h-full" />
          <img src={turide} alt="apex" className="object-cover w-full h-full" />
          <img src={uzuri} alt="apex" className="object-cover w-full h-full" />
          <img
            src={wavegrid}
            alt="apex"
            className="object-cover w-full h-full"
          />
          <img src={driver} alt="apex" className="object-cover w-full h-full" />
          <img src={herot} alt="apex" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
