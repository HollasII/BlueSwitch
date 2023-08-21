import { searchIcon, locationIcon, categoryIcon } from "@/styles/svgs/AllIcons";

const ReasonsToJoinCont = (props: { title: string; details: string }) => {
  return (
    <div className=" reasons-to-join-shadow w-[30%]  sm:w-[18vw] h-fit border  flex flex-col items-center justify-center sm:justify-start px-[11px] py-[16px] sm:px-[34px] sm:py-[55px]">
      <div className="text-[10px] text-Blue font-bold sm:text-[18px] sm:mb-[23px] ">
        {props.title}
      </div>
      <div className="h-[1px] w-full bg-black "></div>
      <div className="text-[8px] sm:text-[15px]">{props.details}</div>
    </div>
  );
};

export default function FirstCTA() {
  const reasonsToJoinArray: { name: string; details: string }[] = [
    {
      name: "Networking",
      details: "Get to meet new people and exchange information and ideas",
    },
    {
      name: "Have Fun",
      details: "Participate in activities that provides amusement or enjoyment",
    },
    {
      name: "Learn New Things",
      details: "Get to meet new people and exchange information and ideas",
    },
  ];

  const barArray = [
    { name: "Find next event", icon: searchIcon },
    {
      name: "event location",
      icon: locationIcon,
    },
    { name: "event category", icon: categoryIcon },
  ];
  return (
    <div className="w-full py-[25px] flex items-center justify-center flex-col relative">
      <div className="max-w-[1152px] mx-[20px] border top-[-75px] bg-white absolute hidden first-cta-box-shadow justify-around px-[20px] xl:px-[60px] sm:flex h-[150px] items-center justify-center">
        {barArray.map((item, index) => {
          return (
            <div
              key={index}
              className="capitalize flex px-[20px] xl:px-[40px] items-center justify-center text-[15px] h-fit border-r border-black"
            >
              <div className="mr-[10px]">{item.icon("fill-black")}</div>
              {item.name}
            </div>
          );
        })}
        <div className="px-[20px] xl:px-[40px]">
          <button className="primary-btn uppercase bg-LightBlue text-white">
            Buy ticket
          </button>
        </div>
      </div>
      <div className=" w-fit text-center sm:flex sm:text-left sm:justify-around  sm:mt-[143px] sm:gap-x-[10%] sm:px-[15px]">
        <div className="sm:w-[100%] sm:max-w-[400px]">
          {" "}
          <div className="uppercase text-[10px]  font-bold text-DarkBlue sm:text-[30px]">
            why you should join blueswitch
          </div>
          <div className="flex items-center w-full justify-center">
            <div className="h-[1px] w-[140px] mt-[11px] mb-[7px] bg-black sm:hidden"></div>
          </div>
          <div className="px-[18px] sm:px-0 text-[8px] mb-[10px] sm:text-[15px] sm:mb-[45px] ">
            We organize events including parties, sporting activities, gaming
            events, street pops and more. We also want to assist content
            creators and aspiring content creators in building a platform that
            they can utilise to market their crafts.
          </div>
          <button className="primary-btn bg-LightBlue uppercase text-[8px] sm:text-[16px] text-white">
            Register
          </button>
        </div>
        <div className="flex-col sm:flex-row flex gap-[7px] sm:gap-[60px] mt-[41px] sm:mt-0 justify-center items-center h-fit w-full sm:w-fit ">
          <div className="flex sm:flex-col gap-[30px] sm:gap-[52px] items-center justify-center">
            {reasonsToJoinArray.map((item, index) => {
              if (index !== 2) {
                return (
                  <ReasonsToJoinCont
                    key={index}
                    title={item.name}
                    details={item.details}
                  ></ReasonsToJoinCont>
                );
              }
            })}
          </div>
          <div className="flex items-center justify-center w-full sm:w-fit  mt-[20px] sm:mt-0">
            {reasonsToJoinArray.map((item, index) => {
              if (index === 2) {
                return (
                  <ReasonsToJoinCont
                    key={index}
                    title={item.name}
                    details={item.details}
                  ></ReasonsToJoinCont>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
