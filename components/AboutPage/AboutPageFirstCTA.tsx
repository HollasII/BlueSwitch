import cta1 from "../../public/imgs/AboutUsPage/cta-1.png";

export default function AboutPageFirstCTA() {
  return (
    <div className="flex jusitfy-center items-center relative overflow-hidden ">
      <div className="pl-[17px] lg:ml-[12.5vw] pt-[65px] pb-[90px] mr-[34px] lg:mr-[6vw]">
        <div className="text-[10px] mb-[20px] font-bold text-DarkBlue sm:text-[20px] xl:text-[34px] 2xl:text-[48px]">
          Are you an artiste? A singer, dancer or any performing act?
        </div>
        <div className="text-[8px] sm:text-[15px] lg:text-[16px] xl:text-[18px]">
          Sign up with Blueswitch talent management to get managed by one of the
          best and most experienced managers in the industry to take your career
          to the next level.
        </div>
        <div>
          <button className="uppercase text-white primary-btn bg-LightBlue sm:mt-[40px] hidden sm:block lg:mt-[79px] hover:bg-DarkBlue duration-300 hover:text-white">
            sign up
          </button>
        </div>
      </div>
      <div className="mr-[15px] sm:mr-[50px]">
        <div className="h-[180px] w-[180px] lg:w-[360px] lg:h-[360px] xl:w-[446px] xl:h-[568px] bg-DarkBlue lg:rounded-[50%] rounded-full relative flex items-center justify-center">
          <div className="absolute w-[140px] h-[140px] lg:w-[280px] lg:h-[280px] xl:w-[524px] xl:h-[568px] bg-LightBlue rounded-full z-0 bg-opacity-[0.1]"></div>
          <img className=" z-10 absolute h-[90%]" src={cta1.src}></img>
        </div>
      </div>
    </div>
  );
}
