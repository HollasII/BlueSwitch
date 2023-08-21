import UpcomingEventItem from "./UpcomingEventsComponents/UpcomingEventItem";
import event1 from "../../public/imgs/LandingPage/UpcomingEvents/events-1.jpg";
import event2 from "../../public/imgs/LandingPage/UpcomingEvents/events-2.jpg";
import event3 from "../../public/imgs/LandingPage/UpcomingEvents/events-3.jpg";
import event4 from "../../public/imgs/LandingPage/UpcomingEvents/events-4.jpg";
import event5 from "../../public/imgs/LandingPage/UpcomingEvents/events-5.jpg";
import event6 from "../../public/imgs/LandingPage/UpcomingEvents/events-6.jpg";
import feature1 from "../../public/imgs/LandingPage/UpcomingEvents/Features/feature-1.jpg";
import feature2 from "../../public/imgs/LandingPage/UpcomingEvents/Features/feature-2.jpg";
import feature3 from "../../public/imgs/LandingPage/UpcomingEvents/Features/feature-3.jpg";
import UpcomingEventTicket from "./UpcomingEventsComponents/UpcomingEventTicket";
import { downArrowIcon } from "../../styles/svgs/AllIcons";

import FeaturesItem from "../FeaturesPage/FeaturesItem";

export default function UpcomingEvents() {
  const dropDownMenus = [
    { name: "Weekdays" },
    { name: "Event type" },
    { name: "category" },
  ];
  const eventsArray = [
    {
      title: "Booze Fest",
      img: event1,
      date: "25",
      month: "Aug",
      details: "Directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Read and Chillz Book Festival",
      img: event2,
      date: "20",
      month: "Aug",
      details: "Directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Lagos Startup Expo 2023",
      img: event3,
      date: "17",
      month: "Aug",
      details: "Directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Tech Unite Africa 2.0",
      img: event4,
      date: "12",
      month: "Aug",
      details: "Directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Concert",
      img: event5,
      date: "09",
      month: "Aug",
      details: "Directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Are you ready for whats coming?",
      img: event6,
      date: "04",
      month: "Aug",
      details: "Directly seated and inside for you to enjoy the show.",
    },
  ];
  const featuresArray = [
    {
      title: "Davido Finally Tweets",
      date: "25",
      month: "Aug",
      details: "Directly seated and inside for you to enjoy the show.",
      img: feature1,
    },
    {
      title: "Naira now Gold",
      date: "25",
      month: "Aug",
      details: "Directly seated and inside for you to enjoy the show.",
      img: feature2,
    },
    {
      title: "ASUU Strikes",
      date: "25",
      month: "Aug",
      details: "Directly seated and inside for you to enjoy the show.",
      img: feature3,
    },
  ];
  return (
    <div className="h-fit w-full ">
      <div className="w-full flex justify-between px-[14px] mt-[15px] mb-[20px] sm:px-[12vw]">
        <div className="text-[10px] font-bold sm:text-[30px] xl:text-[40px]">
          Upcoming Events
        </div>
        <div className="flex gap-x-[5px]">
          {dropDownMenus.map((item, index) => {
            return (
              <div key={index}>
                <button className="primary-drop-down text-[6px] flex justify-around sm:text-[10px] xl:text-[14px] text-Blue border-Blue border">
                  {item.name}{" "}
                  <span className="w-[4px] h-[4px]  sm:w-[12px] sm:h-[12px] xl:w-[14px] xl:h-[14px] ">
                    {downArrowIcon("fill-DarkBlue", "100%", "100%")}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-[14px] flex flex-col sm:flex-wrap sm:flex-row w-full  sm:items-center sm:justify-center sm:px-[12vw] lg:gap-x-[30px] sm:gap-x-[20px] sm:gap-y-[85px] gap-y-[18px]">
        {eventsArray.map((item, index) => {
          if (index) {
            return (
              <UpcomingEventItem
                key={index}
                date={item.date}
                month={item.month}
                title={item.title}
                details={item.details}
                img={item.img}
              ></UpcomingEventItem>
            );
          }
        })}
      </div>
      <div className="flex flex-col items-center justify-center mt-[15px] sm:mt-[64px] sm:mb-[112px]  mb-[7px]">
        <button className="primary-btn font-semibold px-[15px] py-[3px] lg:px-[49px] lg:py-[12px] capitalize text-Blue border-Blue text-[8px] sm:text-[16px] border">
          see more
        </button>
        <div className="mt-[17px] font-bold text-DarkBlue sm:hidden text-[10px] mb-[7px]">
          Upcoming Event Ticket
        </div>
        <div className="w-full sm:mt-[112px]">
          {" "}
          <UpcomingEventTicket></UpcomingEventTicket>
        </div>
      </div>
      <div className="px-[14px] sm:hidden w-full h-full ">
        <div className="text-center w-full mb-[7px] text-[10px] font-bold text-DarkBlue pt-[15px]">
          Features
        </div>
        <div className="gap-y-[37px] w-full  flex flex-col">
          {" "}
          {featuresArray.map((item, index) => {
            return (
              <UpcomingEventItem
                key={index}
                date={item.date}
                month={item.month}
                title={item.title}
                details={item.details}
                img={item.img}
              ></UpcomingEventItem>
            );
          })}
        </div>
      </div>
      <div className="hidden sm:block w-full ">
        <div className="w-full text-center mb-[50px] text-[20px] xl:text-[36px] font-bold text-DarkBlue">
          Features
        </div>
        <div className="flex flex-wrap gap-x-[1.6vw]  justify-center items-start">
          {" "}
          {featuresArray.map((item, index) => {
            return (
              <FeaturesItem
                key={index}
                date={`${item.month + " " + item.date}`}
                title={item.title}
                details={item.details}
                img={item.img}
              ></FeaturesItem>
            );
          })}
        </div>
        <div className="w-full text-center mt-[57px] mb-[87px]">
          <button className="primary-btn w-fit font-semibold px-[15px] py-[3px] lg:px-[49px] lg:py-[12px] capitalize text-Blue border-Blue text-[8px] sm:text-[16px] border">
            see more
          </button>
        </div>
      </div>
    </div>
  );
}
