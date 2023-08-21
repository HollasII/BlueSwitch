export default function SignUpSection() {
  return (
    <div className="w-full info-1-bg   relative sm:h-[362px]  h-[130px] ">
      <div className="text-white z-30 absolute">
        <div className="text-[10px] font-bold px-[17px] lg:px-[12.5vw]  mt-[19px] sm:mt-[39px] sm:text-[20px] xl:text-[34px] 2xl:text-[48px]">
          <span className="sm:hidden">
            {" "}
            Want to stay updated about Blueswitch events?
          </span>
          <span className="hidden sm:block ">
            Do you want to stay updated about Blueswitch&apos;s events??
          </span>
        </div>
        <div className="text-[8px] flex items-center  justify-between gap-x-[22px] px-[17px] mt-[14px] lg:px-[12.5vw]">
          <div className="sm:text-[15px] lg:text-[16px] xl:text-[18px] w-2/4 ">
            {" "}
            Sign up to our mailing list or follow our social media handles to be
            the first to know about our upcoming events.
          </div>
          <div className="bg-white flex min-w-[129px] sm:w-[447px] sm:h-[60px] items-center relative rounded-full justify-between h-[15px] ">
            <input
              className=" w-fit  text-[5px] sm:text-[13px]  text-black ml-[3px] sm:ml-[20px] border-none outline-none"
              type={"email"}
              placeholder="Enter your email address "
            ></input>

            <button className="capitalize sm:py-[13px] sm:text-[14px]  sm:px-[37px] px-[10px] py-[1px]  mr-[2px] sm:mr-[9px]  text-[5px] rounded-full text-white bg-LightBlue hover:bg-DarkBlue duration-300 hover:text-white">
              submit
            </button>
          </div>
        </div>
      </div>
      <div className="hero-cover-1 z-0 absolute w-full sm:h-[362px]  h-[130px] top-0"></div>
    </div>
  );
}
