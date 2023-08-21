import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import {
  infoIcon,
  locationIcon,
  calenderIcon,
} from "../../styles/svgs/AllIcons";

interface TicketingMainComponentProps {
  img: StaticImageData;
  date: string;
  name: string;
  details: string;
  time: string;
  location: string;
  price: number;
  vipPrice: number;
}

export default function TicketingMainComponent(
  props: TicketingMainComponentProps
) {
  const [ticketNo, setTicketNo] = useState(0);
  const [isRegularTicket, setIsRegularTicket] = useState(true);

  const ticketTierButtons = [
    {
      name: "Regular",
      onClick: () => {
        setIsRegularTicket(true);
      },
    },
    {
      name: "Vip",
      onClick: () => {
        setIsRegularTicket(false);
      },
    },
  ];

  const handleTicketAddToCart = () => {
    setTicketNo((prev) => prev + 1);
  };
  const handleTicketRemoveFromCart = () => {
    if (ticketNo === 0) return;
    setTicketNo((prev) => prev - 1);
  };

  return (
    <div>
      <div>
        <div className="px-[15px] lg:px-[13vw] pt-[24px] lg:pt-[145px]">
          <div className="max-w-[360px] h-[289px] border overflow-hidden sm:max-w-full sm:h-[64vw] sm:max-h-[1236px] ">
            <Image
              alt={props.name + "img"}
              width={400}
              className={"w-full"}
              height={600}
              src={props.img.src}
            ></Image>
          </div>
          <div className="mt-[15px] sm:hidden">
            <div className="font-semibold text-[8px] uppercase">
              {props.date}
            </div>
            <div className="font-bold text-Blue text-[20px] uppercase">
              {props.name}
            </div>
            <div className="w-[145px] h-[1px] bg-black mb-[8px] opacity-[0.2]"></div>
            <div className="text-[8px]">{props.details}</div>
            <div className="text-[8px] mt-[28px]">
              <div className="font-semibold text-[10px] ">When and Where</div>
              <div className="mt-[8px] flex items-center  gap-x-[6.5px]">
                <div>{calenderIcon("fill-Blue", "4", "4")}</div>
                <div>
                  <div className="font-semibold">Date and time</div>
                  <div>
                    {props.date} - {props.time}
                  </div>
                </div>
              </div>
              <div className="mt-[13.5px] flex items-center gap-x-[6.5px]">
                <div>{locationIcon("fill-Blue", "4", "4")}</div>
                <div>
                  {" "}
                  <div className="font-semibold">Location</div>
                  <div>{props.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden w-full px-[15px] mt-[47px] pt-[6px] pb-[16px] border rounded-[6px] ticketing-main-component-shadow">
          <div className="text-center w-full font-bold text-[10px]">
            Ticket Purchase
          </div>
          <div></div>
          <div className="w-full flex justify-center gap-x-[8px] uppercase text-[6px]">
            {ticketTierButtons.map((item, index) => {
              const selectedName = isRegularTicket ? "regular" : "vip";
              const selected =
                selectedName.toLowerCase() === item.name.toLowerCase();
              return (
                <button
                  onClick={() => {
                    item.onClick();
                  }}
                  className={`${
                    selected
                      ? "border-Blue text-Blue"
                      : "border-black text-black"
                  } px-[7px] py-[3px] rounded-full border-[0.5px]  flex items-center gap-x-[10px]`}
                  key={index}
                >
                  {item.name}{" "}
                  <span>
                    {infoIcon(
                      `${selected ? "fill-Blue" : "fill-black"}`,
                      "8px",
                      "8px"
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="w-full flex justify-between mt-[9px] text-[8px]">
            <div>
              <div className="font-bold">
                {isRegularTicket ? "Regular" : "VIP"}
              </div>
              <div>{isRegularTicket ? props.price : props.vipPrice}</div>
            </div>
            <div className="flex justify-center items-center gap-x-[4px] ">
              <button
                onClick={handleTicketAddToCart}
                className="text-[5px] bg-black text-white rounded-full w-[8px] h-[8px] "
              >
                +
              </button>
              <span className="font-bold text-center  ">{ticketNo}</span>
              <button
                onClick={handleTicketRemoveFromCart}
                className="text-[5px] bg-black text-white rounded-full w-[8px] h-[8px] "
              >
                -
              </button>
            </div>
          </div>
          <div className="w-full bg-black h-[1px] my-[5px]"></div>
          <div className="w-full flex justify-between  text-[8px] ">
            <div>
              <div className="font-bold">Subtotal</div>
              <div>2Tickets</div>
            </div>
            <div>{`N${
              isRegularTicket
                ? ticketNo * props.price
                : ticketNo * props.vipPrice
            }`}</div>
          </div>
          <button className="w-full rounded-full rounded-full next-btn-bg hover:bg-DarkBlue duration-300 mt-[8px] text-[8px] font-bold text-white text-center py-[7px]">
            Next
          </button>
        </div>

        <>
          <div className="sm:flex hidden px-[15px] lg:px-[24px] mt-[82px] gap-x-[7vw] xl:px-[13vw]">
            <div>
              <div className=" ">
                <div className="font-semibold text-[15px] uppercase">
                  {props.date}
                </div>
                <div className="font-bold text-Blue text-[30px] uppercase">
                  {props.name}
                </div>
                <div className="w-[145px] h-[1px] bg-black mb-[8px] opacity-[0.2]"></div>
                <div className="text-[15px]">{props.details}</div>
                <div className="text-[15px] mt-[28px]">
                  <div className="font-semibold text-[16px] ">
                    When and Where
                  </div>
                  <div className="lg:flex gap-x-[7.5vw]">
                    <div className="mt-[8px] flex items-center gap-x-[32px]  ">
                      {calenderIcon("fill-Blue ")}
                      <div>
                        <div className="font-semibold">Date and time</div>
                        <div>
                          {props.date} - {props.time}
                        </div>
                      </div>
                    </div>
                    <div className="mt-[13.5px] flex items-center gap-x-[32px] ">
                      {locationIcon("fill-Blue ", "24", "28")}
                      <div>
                        <div className="font-semibold">Location</div>
                        <div>{props.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full px-[32px] mt-[47px] pt-[6px] pb-[64px] border border-Blue rounded-[30px] ticketing-main-component-shadow">
              <div className="text-center w-full font-bold text-[15px] mt-[30px]">
                Ticket Purchase
              </div>
              <div className="w-full bg-black h-[1px] mt-[13px] mb-[22px]"></div>
              <div className="w-full max-w-[447px] flex justify-center gap-x-[40px] uppercase text-[16px]">
                {ticketTierButtons.map((item, index) => {
                  const selectedName = isRegularTicket ? "regular" : "vip";
                  const selected =
                    selectedName.toLowerCase() === item.name.toLowerCase();
                  return (
                    <button
                      onClick={() => {
                        item.onClick();
                      }}
                      className={`${
                        selected
                          ? "border-Blue text-Blue"
                          : "border-black text-black"
                      } px-[30px] py-[10px] rounded-full border-[0.5px]  flex items-center gap-x-[10px]`}
                      key={index}
                    >
                      {item.name}{" "}
                      <span>
                        {infoIcon(
                          `${selected ? "fill-Blue" : "fill-black"}`,
                          "24px",
                          "24px"
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="w-full flex justify-between mt-[40px] lg:mt-[93px] text-[16px]">
                <div>
                  <div className="font-bold">
                    {isRegularTicket ? "Regular" : "VIP"}
                  </div>
                  <div>{isRegularTicket ? props.price : props.vipPrice}</div>
                </div>
                <div className="flex justify-center items-center gap-x-[4px] ">
                  <button
                    onClick={handleTicketAddToCart}
                    className="text-[16px] bg-black text-white rounded-full w-[24px] h-[24px] "
                  >
                    +
                  </button>
                  <span className="font-bold text-center  ">{ticketNo}</span>
                  <button
                    onClick={handleTicketRemoveFromCart}
                    className="text-[16px] bg-black text-white rounded-full w-[24px] h-[24px] "
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="w-full bg-black h-[1px] mt-[41px] mb-[21px]"></div>
              <div className="w-full flex justify-between  text-[16px] ">
                <div>
                  <div className="font-bold">Subtotal</div>
                  <div>{ticketNo} Tickets</div>
                </div>
                <div>{`N${
                  isRegularTicket
                    ? ticketNo * props.price
                    : ticketNo * props.vipPrice
                }`}</div>
              </div>
              <button className="w-full rounded-full rounded-full next-btn-bg hover:bg-DarkBlue duration-300 mt-[8px] text-[16px] font-bold text-white text-center py-[20px]">
                Next
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
