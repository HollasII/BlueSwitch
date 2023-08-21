import { useState } from "react";

export default function ContactForm() {
  const inputsArray = [
    { name: "Email" },
    { name: "Country" },
    { name: "FirstName" },
    { name: "LastName" },
    { name: "PhoneNumber" },
    { name: "Reasons" },
  ];

  const [formData, setFormData] = useState({
    Email: { val: "" },
    Country: { val: "" },
    FirstName: { val: "" },
    LastName: { val: "" },
    PhoneNumber: { val: "" },
    Reasons: { val: "" },
  });

  const handleInput = (key: string, inputVal: string) => {
    console.log(formData, key, inputVal);

    setFormData((prev: any) => {
      return { ...prev, [key]: { ...prev[key], val: inputVal } };
    });
  };

  const inputStyles = `h-[32px] px-2 bg-LightGray border-MidGray border rounded-[5px] xl:h-[71px] xl:mt-[14px]`;
  const labelStyles = `text-[10px] `;
  return (
    <div className="text-[10px] mb-[64px] xl:mb-[221px]  xl:px-0 sm:text-[15px] px-[16px] flex-col gap-y-[24px] flex mt-[47px] xl:mt-0  lg:px-[12vw]">
      <div className="flex flex-col gap-y-[24px] xl:flex-row xl:gap-x-[30px]">
        <div className="flex flex-col">
          <label>Email</label>
          <input
            onChange={(e) => {
              handleInput("Email", e.target.value);
            }}
            className={inputStyles}
            type={"email"}
          ></input>
        </div>
        <div className="flex flex-col ">
          <label>Country/Region</label>
          <input
            onChange={(e) => {
              handleInput("Country", e.target.value);
            }}
            className={inputStyles}
            type={""}
          ></input>
        </div>
      </div>
      <div className="flex flex-col gap-y-[24px]  xl:flex-row xl:gap-x-[30px]">
        <div className="flex flex-col">
          <label>First name</label>
          <input
            onChange={(e) => {
              handleInput("FirstName", e.target.value);
            }}
            className={inputStyles}
            type={""}
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Last name</label>
          <input
            onChange={(e) => {
              handleInput("LastName", e.target.value);
            }}
            className={inputStyles}
            type={""}
          ></input>
        </div>
      </div>
      <div className="flex flex-col gap-y-[24px]">
        <div className="flex flex-col">
          <label>Phone number</label>
          <input
            onChange={(e) => {
              handleInput("PhoneNumber", e.target.value);
            }}
            className={inputStyles}
            type={"number"}
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Reason for getting in touch</label>

          <input
            onChange={(e) => {
              handleInput("Reasons", e.target.value);
            }}
            className={`${inputStyles} xl:h-[154px]`}
          ></input>
        </div>
      </div>
      <button className="text-white hover:bg-DarkBlue duration-300 rounded-[5px] next-btn-bg bg-opacity-[0.2] px-[17px] py-[8px] w-fit xl:px-[49px] xl:py-[12px]">
        Contact Us
      </button>
    </div>
  );
}
