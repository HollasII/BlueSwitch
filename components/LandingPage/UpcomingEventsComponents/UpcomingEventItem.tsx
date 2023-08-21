interface UpcomingEventItemProps {
  title: string;
  month: string;
  date: string;
  details: string;
  img: any;
}

export default function UpcomingEventItem(props: UpcomingEventItemProps) {
  return (
    <div className=" group ">
      <div className="flex rounded-[8.57px] upcoming-events-box-shadow sm:flex-col xl:w-[23vw] sm:w-[35vw]">
        <div className=" w-full h-[120px] sm:h-[10vw] max-w-[147px] sm:max-w-full  overflow-hidden rounded-l-[8.57px] sm:rounded-l-none sm:rounded-t-[8.57px] ">
          <img
            className="object-cover w-full h-full group-hover:scale-[1.2] duration-300"
            src={props.img.src}
          ></img>
        </div>

        <div className="px-[16px] py-[11px] sm:px-[38px] sm:py-[23px]">
          <div className="sm:flex sm:gap-x-[16px]">
            <div className="font-bold text-[10px] uppercase text-LightBlue mb-[13px] sm:flex sm:gap-x-[16px]">
              <div className="sm:flex-col flex  ">
                <span className="sm:text-[11px]">{props.month}</span>{" "}
                <span className="text-black sm:text-[28px] sm:text-left">
                  {props.date}
                </span>{" "}
              </div>
            </div>
            <div className="font-bold text-[12px] sm:hidden ">
              {props.title}
            </div>
            <div>
              {" "}
              <span className="font-bold text-[12px] hidden sm:block text-black sm:text-[16px] sm:h-[52px] line-clamp-2">
                {props.title}
              </span>
              <div className="text-[8px] sm:text-[14px]  Dm-Sans line-clamp-2">
                {props.details}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
