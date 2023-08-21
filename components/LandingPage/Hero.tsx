import sd from "../../public/imgs/LandingPage/hero.jpg";
import Image from "next/image";

export default function Hero() {
  const bg = "bg-[url('/public/imgs/LandingPage/hero.jpg')]";
  return (
    <div className={` w-full hero-bg h-fit sm:h-screen   hero-img`}>
      <div className="hero-cover z-0 absolute sm:h-full h-fit  w-full ">
        <div className=" w-full h-[40vh] sm:h-full z-10 text-center  flex flex-col gap-[25px] items-center justify-center">
          <div className=" text-[24px] sm:text-[48px] text-white font-bold">
            Creating, Capturing and Influencing
          </div>
          <div className="text-[10px] text-white sm:text-[18px]">
            Work Hard, Play Hard and Party even Harder
          </div>
          <div className="text-white gap-[15px] flex items-center justify-center">
            <button className="primary-btn  bg-LightBlue text-[8px] uppercase sm:text-[14px]">
              Buy Ticket
            </button>
            <button className="primary-btn border text-[8px] uppercase sm:text-[14px]">
              View Details
            </button>
          </div>
        </div>
      </div>

      <Image
        width={800}
        alt="hero"
        className="w-full h-[40vh] object-cover sm:hidden"
        height={400}
        src={sd.src}
      ></Image>
    </div>
  );
}
