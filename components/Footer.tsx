import logoImg from "../public/imgs/Global/logo3.png";
import {
  faceBookIcon,
  twitterIcon,
  linkedInIcon,
} from "@/styles/svgs/AllIcons";
import Link from "next/link";

export default function Footer() {
  const planEventsLinksArray = [
    { name: "Create and Set Up" },
    { name: "Sell Tickets" },
    { name: "Online RSVP " },
    { name: "Online Events" },
  ];

  const informationLinksArray = [
    { name: "About Us" },
    { name: "Press" },
    { name: "Contact Us" },
    { name: "Help Center" },
    { name: "How it Works" },
    { name: "Privacy" },
    { name: "Terms" },
  ];
  return (
    <div className="bg-DarkGray relative text-white pt-[20px] h-fit sm:h-fit xl:h-fit xl:py-[60px] xl:gap-x-[5vw] xl:px-[12.5vw] overflow-hidden  w-full block mt-[25px] flex-col items-center xl:flex-row flex jusitfy-center xl:justify-between xl:items-start">
      <div className="flex items-center flex-col   xl:items-end  xl:justify-end ">
        <img
          className="w-[100px] xl:w-[161px] sm:w-[161px]  xl:self-start xl:mb-[5px]"
          width={200}
          height={45}
          src={logoImg.src}
        ></img>
        <div className="text-center text-[8px] px-[40px] sm:text-[14px] xl:text-left  xl:w-fit xl:px-0">
          Blueswitch is an influential entertainment brand that organizes events
          and fun parties. It provides a platform for different types of
          entertainers and content creators.
        </div>
        <div className="flex my-[24px] gap-x-[4px]  xl:self-start">
          <Link href={"/"}>{faceBookIcon()}</Link>
          <Link href={"/"}> {twitterIcon()}</Link>
          <Link href={"/"}>{linkedInIcon()}</Link>
        </div>
      </div>
      <div className="flex flex-col w-full  items-center justify-center text-[10px] mb-[24px] xl:text-left  xl:mb-0 xl:items-start">
        <div className="font-bold mb-[4px] sm:text-[18px] xl:mb-[20px]">
          Plan Events
        </div>
        <div className="flex flex-col items-center xl:items-start justify-center gap-y-[3px]  sm:text-[14px]">
          {planEventsLinksArray.map((item, index) => {
            return (
              <div key={index} className=" block">
                <Link key={index} className="block" href={"/"}>
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-[10px] xl:items-start">
        <div className="font-bold mb-[4px] sm:text-[18px] xl:mb-[20px]">
          Information
        </div>
        <div className="flex flex-col items-center xl:text-left xl:items-start justify-center gap-y-[3px]  sm:text-[14px]">
          {informationLinksArray.map((item, index) => {
            return (
              <Link key={index} href={"/"}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-[10px] mt-[47px] xl:text-left xl:mt-0 xl:items-start">
        <div className="font-bold mb-[8px] sm:text-[18px] xl:mb-[20px]">
          Stay in the loop
        </div>
        <div className="px-[11px] text-center  sm:text-[14px] xl:text-left xl:px-0">
          Join our mailing list to stay in the loop with our newest for Event
          and concert
        </div>
        <div className="bg-white  xl:flex w-[216px] xl:w-[384px] xl:mt-[13px] items-center relative rounded-full  justify-between pl-[6px] pr-[3px] py-[10px] xl:py-[20px] xl:px-[15px] hidden ">
          <input
            className=" w-fit text-[8px] text-black border-none outline-none xl:text-[13px]"
            type={"email"}
            placeholder="Enter your email address "
          ></input>
          <button className="capitalize  px-[13px] py-[6px] xl:px-[36px] xl:py-[13px] absolute right-[3px] xl:right-[8px] xl:text-[14px] text-[8px] rounded-full text-white bg-LightBlue hover:bg-DarkBlue duration-300 hover:text-white">
            submit
          </button>
        </div>
      </div>
      <div className=" w-full flex item-center justify-center mt-[24px] xl:text-left  xl:hidden xl:items-start ">
        <div className="bg-white flex w-[216px] items-center relative rounded-full justify-between pl-[6px] pr-[3px] py-[10px] ">
          <input
            className=" w-fit placeholder:text-[8px] text-[8px] text-black border-none outline-none"
            type={"email"}
            placeholder="Enter your email address "
          ></input>
          <button className="capitalize  px-[13px] py-[6px] absolute right-[3px] text-[8px] rounded-full text-white bg-LightBlue hover:bg-DarkBlue duration-300 hover:text-white">
            submit
          </button>
        </div>
      </div>
      <div className="bottom-[33px] sm:bottom-[57px] w-[70vw] h-[1px] bg-DarkPurple absolute  "></div>
      <div className="text-[6px] mt-[27px] mb-[20px] xl:mb-0 left-0 text-center w-full sm:text-[14px] xl:absolute flex items-center justify-center xl:bottom-[20px]  ">
        Copyright © 2023
      </div>
    </div>
  );
}
