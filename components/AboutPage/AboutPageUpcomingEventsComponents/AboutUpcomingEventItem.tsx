interface AboutUpcomingEventItemProps {
  img: any;
  title: string;
  date: string;
  location: string;
}

export default function AboutUpcomingEventItem(
  props: AboutUpcomingEventItemProps
) {
  return (
    <div className="flex flex-col border gap-y-[7px] w-[178px] sm:w-fit rounded-[4px] sm:rounded-[10px] text-[8px] sm:text-[15px] px-[8px] py-[12px] upcoming-event-item-box-shadow">
      <div className="h-[142px] w-[161px] overflow-hidden lg:w-[401px] lg:h-[353px] sm:w-[200px] sm:h-[160px]">
        <img src={props.img.src} className="object-cover w-full"></img>
      </div>
      <div className="font-bold text-[12px] text-DarkBlue lg:text-[30px] sm:text-[16px] ">
        {props.title}
      </div>
      <div>{props.date}</div>
      <div>{props.location}</div>
      <div className="uppercase">blue switch</div>
      <button className="uppercase text-white w-full py-[5px] sm:text-[12px] lg:text-[16px] rounded-[4px] bg-LightBlue hover:bg-Blue duration-300">
        BUY Ticket
      </button>
    </div>
  );
}
