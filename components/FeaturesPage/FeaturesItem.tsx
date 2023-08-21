interface FeaturesItemProps {
  title: string;
  details: string;
  date: string;
  img: any;
}

export default function FeaturesItem(props: FeaturesItemProps) {
  return (
    <div>
      <div className=" sm:max-w-[447px] sm:w-[23vw] sm:min-h-[36vw] xl:h-[36vw] w-[43vw]  sm:w-full  features-item-box-shadow rounded-[4px] ">
        <div className="w-full h-full  sm:w-[23vw] sm:h-[22vw] ">
          <img
            className="object-cover h-[170px] sm:h-full w-full rounded-t-[4px]"
            src={props.img.src}
          ></img>
        </div>
        <div className="w-full ">
          {" "}
          <div className="text-[10px] Montserrat p-[7px] pb-0  w-full sm:p-[16px] sm:w-[23vw] ">
            <div className="font-bold text-[10px] text-Blue sm:text-[12px] lg:text-[14px] xl:text-[20px] uppercase  line-clamp-1">
              {props.title}
            </div>
            <div className="text-[8px]  text-Gray xl:text-[16px] lg:text-[12px] sm:text-[10px] line-clamp-3 sm:line-clamp-1">
              {props.details}
            </div>
            <div className="text-[6px] mt-[6px] text-Gray font-semibold lg:text-[14px] sm:text-[10px]">
              {props.date}
            </div>
          </div>
          <button className="relative uppercase text-Blue mt-[6px] w-fit text-[8px] p-[7px] sm:text-[12px] sm:px-[16px]  pt-0 xl:text-[18px] group ">
            Read more
            <div className="w-[35px] h-[1px] bg-Blue mt-[2px] sm:group-hover:w-[80px] duration-300 absolute group-hover:w-[50px]"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
