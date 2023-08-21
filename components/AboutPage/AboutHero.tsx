import Link from "next/link";
import { useState } from "react";

export default function AboutHero() {
  const aboutUsNavArray = [
    { name: "All" },
    { name: "Talent management" },
    { name: "Events" },
    { name: "Tickets" },
    { name: "Peformers/Entertainers" },
  ];
  const [selectedPage, setSelectedPage] = useState("AboutPage");
  return (
    <div className="w-full h-fit  relative ">
      <div className="w-full hero-bg h-[67vw] bg-cover pt-[34px] relative sm:pt-[80px] lg:pt-[112px] xl:pt-[112px] sm:h-[48vw] lg:h-[38vw]">
        <div className="w-full h-[67vw] alternate-hero-cover absolute z-0 top-0"></div>

        <div className="flex z-10 absolute z-10 flex-col ">
          <div className="flex text-[8px] sm:font-bold sm:text-[12px] lg:text-[18px] lg:ml-[13.5vw] lg:w-[783px] lg:px-0  text-white justify-between z-10 px-[16px] sm:px-[24px] mb-[5vw] sm:mb-[4vw] Montserrat font-semibold">
            <button className="hidden lg:block">About Page</button>{" "}
            {aboutUsNavArray.map((item, index) => {
              return (
                <button
                  className={`${
                    item.name.toLowerCase() === "all" ? "lg:hidden" : ""
                  }`}
                  key={index}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <div className="text-[10px] w-[57%]  mb-[56px] sm:text-[15px] 2xl:text-[32px] lg:text-[20px] ml-[13.5vw]">
            <div className="capitalize font-medium text-DarkGray xl:text-[40px] sm:text-[20px]">
              what we do
            </div>
            <div className="text-white font-extrabold ">
              {" "}
              organize events including parties, sporting activities, gaming
              events, street pops and more. We also want to assist content
              creators and aspiring content creators in building a platform that
              they can utilize to market their crafts.
            </div>
            <div className="w-full flex items-center justify-center mt-[4vw] sm:hidden">
              <button className="capitalize primary-btn bg-LightBlue text-white">
                sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
