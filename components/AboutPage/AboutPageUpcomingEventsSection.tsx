import AboutUpcomingEventItem from "./AboutPageUpcomingEventsComponents/AboutUpcomingEventItem";
import event1 from "./../../public/imgs/AboutUsPage/UpcomingEvents/events-1.jpg";

export default function AboutPageUpcomingEventsSection() {
  return (
    <div className="px-[15px] pb-[83px] pt-[23px] lg:px-[13vw]">
      <div className="font-bold text-[10px] mb-[5px] sm:text-[24px] lg:text-[30px] xl:mb-[10px]">
        Upcoming Blueswitch event
      </div>
      <AboutUpcomingEventItem
        date="Fri, Mar 31, 7:00 PM"
        title="Booze fest"
        location="D’podium event center Ikeja"
        img={event1}
      ></AboutUpcomingEventItem>
    </div>
  );
}
