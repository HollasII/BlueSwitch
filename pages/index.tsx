import Image from "next/image";
/* import { Inter } from "next/font/google"; */ /* 
import { Poppins } from "next/font/google"; */
import FirstCTA from "@/components/LandingPage/FirstCTA";
import Hero from "@/components/LandingPage/Hero";
import UpcomingEvents from "@/components/LandingPage/UpcomingEvents";

/* const inter = Inter({ subsets: ["latin"] }); */
/* const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
}); */

export default function Home() {
  return (
    <div className={"w-full  "}>
      <div className="w-full ">
        <Hero></Hero>
        <FirstCTA></FirstCTA>
        <div className="info-1-bg w-full sm:h-[312px] h-[63px] relative">
          <div className="text-white absolute z-10 uppercase h-full flex flex-col items-center justify-center text-center w-full">
            <div className="text-[8px] text-LightBlue sm:text-[18px]">
              {" "}
              WE are an INfluential entertainment brand
            </div>
            <div className="text-[10px] font-bold sm:text-[36px]">
              We provide non-stop fun events and parties
            </div>
          </div>
          <div className="hero-cover-1 z-0 absolute w-full sm:h-[312px] h-[63px]"></div>
        </div>
        <UpcomingEvents></UpcomingEvents>
      </div>

      {/*   <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
          }
        `}
      </style> */}
    </div>
  );
}
