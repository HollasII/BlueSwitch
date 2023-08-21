import FeaturesItem from "@/components/FeaturesPage/FeaturesItem";
import { useState } from "react";
import feature1 from "../../public/imgs/FeaturesPages/feature-1.jpg";
import feature2 from "../../public/imgs/FeaturesPages/feature-2.jpg";

export default function FeaturesPage() {
  const featuresHeaders = [
    { name: "All" },
    { name: "News" },
    { name: "Books" },
    { name: "Events" },
    { name: "Quizzes" },
    { name: "Sports" },
    { name: "Short Stories" },
  ];

  const [selected, setSelected] = useState("All");

  return (
    <div>
      <div className="flex gap-x-[10px] mb-[21px] pt-[21px] px-[14px] sm:py-[71px]  lg:pt-[120px] xl:pt-[200px] text-[8px] sm:text-[12px] sm:px-[14vw] lg:px-[12vw] lg:text-[18px] gap-x-[5vw] font-semibold ">
        {featuresHeaders.map((item, index) => {
          return (
            <button
              className={`duration-300 ${
                selected === item.name ? "text-Blue border-b" : ""
              } `}
              onClick={() => {
                setSelected(item.name);
              }}
              key={index}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="flex features gap-x-[5px] px-[14px] sm:gap-x-[1.6vw] gap-y-[20px] sm:gap-y-[76px] flex-wrap items-center justify-center sm:justify-between lg:md:justify-between xl:px-[12vw] sm:px-[12vw] ">
        <FeaturesItem
          title="Davido finally tweets"
          img={feature1}
          date="NOV 23 2020"
          details="A quick guide to assisting users in the challenging steps from learning 
about your podcast on the web.  "
        ></FeaturesItem>
        <FeaturesItem
          title="Davido finally tweets"
          img={feature1}
          date="NOV 23 2020"
          details="A quick guide to assisting users in the challenging steps from learning 
about your podcast on the web.  "
        ></FeaturesItem>
        <FeaturesItem
          title="Davido finally tweets"
          img={feature1}
          date="NOV 23 2020"
          details="A quick guide to assisting users in the challenging steps from learning 
about your podcast on the web.  "
        ></FeaturesItem>
        <FeaturesItem
          title="naira now gold"
          img={feature2}
          date="NOV 23 2020"
          details="A quick guide to assisting users in the challenging steps from learning 
about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  "
        ></FeaturesItem>
        <FeaturesItem
          title="naira now gold"
          img={feature2}
          date="NOV 23 2020"
          details="A quick guide to assisting users in the challenging steps from learning 
about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  "
        ></FeaturesItem>
        <FeaturesItem
          title="naira now gold"
          img={feature2}
          date="NOV 23 2020"
          details="A quick guide to assisting users in the challenging steps from learning 
about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  "
        ></FeaturesItem>
        <FeaturesItem
          title="Davido finally tweets"
          img={feature1}
          date="NOV 23 2020"
          details="A quick guide to assisting users in the challenging steps from learning 
about your podcast on the web.  "
        ></FeaturesItem>
      </div>
    </div>
  );
}
