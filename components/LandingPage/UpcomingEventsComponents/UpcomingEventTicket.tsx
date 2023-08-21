import ticket1 from "../../../public/imgs/LandingPage/UpcomingEvents/ticket-1.jpg";
import Image from "next/image";

export default function UpcomingEventTicket() {
  return (
    <div className="p-[18px] bg-SkyBlue w-full sm:px-[14vw] sm:py-[6vw]">
      {" "}
      <div className="flex gap-x-[15px] lg:gap-x-[40px] xl:gap-x-[75px] ">
        <div>
          <Image
            alt="Ticket Image"
            src={ticket1.src}
            height={70}
            unoptimized={true}
            className="sm:w-[50vw]"
            width={230}
          ></Image>
        </div>
        <div className="flex flex-col text-[6px] sm:text-[12px] lg:text-[16px] xl:text-[20px]">
          <div className="">Get Your Tickets Now</div>
          <div className="text-[14px] font-black xl:text-[48px] sm:text-[24px] lg:text-[32px]">
            BOOZE FEST{" "}
          </div>
          <div className="">The world looks better with some booze</div>
          <button className="text-[8px] sm:text-[12px] xl:text-[16px] sm:px-[20px] sm:py-[6px] lg:px-[49px] lg:py-[12px] border px-[8px] w-fit py-[3px] hover:bg-DarkBlue duration-300 mt-[2px] rounded-full bg-LightBlue uppercase text-white">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
