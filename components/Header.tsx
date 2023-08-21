import { searchIcon, mobileDropMenuIcon } from "@/styles/svgs/AllIcons";
import logoImg from "../public/imgs/Global/logo3.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const pathIsHome = router.asPath === "/";
  const [isMenuOpen, setOpenMenu] = useState(false);
  const [isScrolledDown, setIsScrolledDowned] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/AboutUs" },
    { name: "Features", link: "/Features" },
    { name: "Contact", link: "/Contact" },
  ];

  useEffect(() => {
    const handleScrollDown = (val: boolean) => {
      setIsScrolledDowned(val);
    };
    const scrollHandlerFunction = () => {
      if (window.scrollY > 50) {
        handleScrollDown(true);
      } else {
        handleScrollDown(false);
      }
    };
    addEventListener("scroll", scrollHandlerFunction);
    return () => removeEventListener("scroll", scrollHandlerFunction);
  }, []);

  return (
    <div
      className={`${
        pathIsHome
          ? isScrolledDown
            ? "bg-DarkBlue bg-opacity-[0.5] "
            : ""
          : "bg-DarkBlue"
      } flex duration-300 justify-between fixed top-0 z-50 backdrop-blur-sm w-full h-[34px] sm:h-[60px]  lg:h-[112px] items-center`}
    >
      <img
        className="xl:ml-[12vw] w-[60px] sm:w-[100px] lg:w-[156px] ml-[16px]"
        width={200}
        height={45}
        src={logoImg.src}
      ></img>
      <div className="sm:flex hidden  w-full justify-around xl:w-fit  text-white xl:mr-[10vw] text-[12px] lg:text-[16px] items-center sm:justify-center ">
        <div className="flex  gap-[40px] items-center justify-center">
          {links.map((item, index) => {
            return (
              <Link
                key={index}
                className="hover:text-MidGray duration-300"
                href={item.link ? item.link : "/"}
              >
                {item.name}
              </Link>
            );
          })}
          <button className="">{searchIcon(" fill-white")}</button>
        </div>

        <Link
          href={"/Ticketing"}
          className="py-[10px] px-[40px] border rounded-md xl:ml-[80px] lg:ml-[80px] sm:ml-[40px] hover:bg-white hover:text-black duration-300"
        >
          Buy Ticket
        </Link>
      </div>
      <div className="flex gap-[14px] relative justify-end w-full text-white sm:hidden text-[8px] mr-[15px] ">
        <button className="xl:ml-[43px]">
          {searchIcon(" fill-white", "16", "16")}
        </button>
        <div className="relative">
          <button
            onClick={() => {
              setOpenMenu((prev) => !prev);
            }}
            className="xl:ml-[43px] "
          >
            {mobileDropMenuIcon(" fill-white", "16", "16")}
          </button>
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -10 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              key={isMenuOpen.toString()}
              className="absolute right-[20%]"
            >
              {isMenuOpen && (
                <div className="flex-col bg-white border features-item-box-shadow border-DarkBlue pl-[10px] pr-[24px] py-[8px] rounded-[8px] text-black flex">
                  {links.map((item, index) => {
                    return (
                      <div
                        onClick={() => {
                          setOpenMenu(false);
                        }}
                        key={index}
                      >
                        <Link
                          className="uppercase font-bold text-DarkBlue "
                          key={index}
                          href={item.link ? item.link : "/"}
                        >
                          {item.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  );
}
