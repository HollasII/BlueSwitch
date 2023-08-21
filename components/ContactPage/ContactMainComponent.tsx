import ContactForm from "./ContactForm";

export default function ContactMainComponent() {
  return (
    <div className="contact-page xl:flex xl:gap-x-[30px] xl:px-[12vw]  lg:pt-[168px]  sm:pt-[100px] pt-[50px] h-fit">
      <div className="flex flex-col gap-y-[16px] text-[8px] px-[18px] lg:px-[12vw] sm:text-[15px] xl:px-0">
        <div>
          Contact our team of experts to discuss the specifics of your business
          and how Eventbrite can help take it to the next level. Simply fill out
          the form to the right, and we&apos;ll be in touch shortly.
        </div>
        <div>
          Have a question related to COVID-19? Please view our COVID-19 resource
          hub for event organizers or attendees.
        </div>
        <div>
          Looking to make your events virtual? Click here to learn more about
          Online Events.
        </div>
        <div>
          Attending an event and need help? Get the support you need here. Are
          you an organizer already using Eventbrite and need help? Find it here.
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}
