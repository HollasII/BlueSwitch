import { ReactNode } from "react";
import Header from "./Header";
import { useRouter } from "next/router";
import Footer from "./Footer";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper(props: WrapperProps) {
  const router = useRouter();
  const pathIsHome = router.asPath === "/";
  const headerDictionaryArray = [
    { name: "Features", link: "/Features" },
    {
      name: (
        <span>
          Blueswitch<span className="opacity-0">1</span>Entertainment
        </span>
      ),
      link: "/AboutUs",
    },
    {
      name: (
        <span>
          Contact<span className="opacity-0">1</span>Us
        </span>
      ),
      link: "/Contact",
    },
    { name: "Tickets", link: "/Ticketing" },
  ];
  return (
    <div>
      <Header></Header>
      <div
        className={` ${
          pathIsHome ? "" : "mt-[34px] sm:mt-[60px]  lg:mt-[112px] relative"
        }`}
      >
        <div className="">
          {" "}
          <div className="w-full flex items-center justify-center absolute top-0 sm:top-[34px] z-40 h-fit">
            {" "}
            <div className="w-[90vw] lg:w-[72vw] flex items-center justify-center gap-x-[4px]  ">
              <div className="w-full h-[0.2px] bg-DarkGray"></div>
              <div className="text-[10px] font-semibold text-DarkBlue lg:text-[40px] sm:text-[20px] ">
                {headerDictionaryArray.map((item) => {
                  if (item.link === router.pathname) {
                    return (
                      <span className=" break-keep" key={item.link}>
                        {item.name}
                      </span>
                    );
                  }
                })}
              </div>
              <div className="w-full h-[0.2px] bg-DarkGray"></div>
            </div>
          </div>
        </div>
        <div className=""> {props.children}</div>
      </div>

      <Footer></Footer>
    </div>
  );
}
