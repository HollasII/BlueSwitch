import AboutHero from "@/components/AboutPage/AboutHero";
import AboutPageFirstCTA from "@/components/AboutPage/AboutPageFirstCTA";
import SignUpSection from "@/components/AboutPage/SignUpSection";
import AboutPageUpcomingEventsSection from "@/components/AboutPage/AboutPageUpcomingEventsSection";
export default function AboutUs() {
  return (
    <div className="about-us">
      <AboutHero></AboutHero>
      <AboutPageFirstCTA></AboutPageFirstCTA>
      <SignUpSection></SignUpSection>
      <AboutPageUpcomingEventsSection></AboutPageUpcomingEventsSection>
    </div>
  );
}
