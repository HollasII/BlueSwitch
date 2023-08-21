import TicketingMainComponent from "@/components/TicketingPage/TicketingMainComponent";
import event1 from "../../public/imgs/TicketingPage/events-1.jpg";
export default function Ticketing() {
  return (
    <div className="w-full h-fit bg-white ticketing">
      <TicketingMainComponent
        img={event1}
        name={"Booze Fest"}
        vipPrice={12000}
        time={"12px"}
        price={10000}
        location={"D'podium event center Ikeja"}
        details={
          "BOOZE FEST is back and bigger. Enjoy nonstop music, good vibe and a safe space for you to unleash the WILD side of you! 15th April. There will be lots of giveaways, special guest appearances, raffle draw, dance, drinks and lots more..."
        }
        date="April 1ST"
      ></TicketingMainComponent>
    </div>
  );
}
