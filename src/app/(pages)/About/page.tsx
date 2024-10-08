import Intro from "~/app/(pages)/About/intro";
import TeamSection from "~/app/(pages)/About/team";
import ValuesSection from "~/app/(pages)/About/value";
import { CarrerSection } from "~/components/CarrerSection";

const About = () => {
  return (
    <div className="overflow-hidden">
      <Intro />

      <section id="team">
        <TeamSection />
      </section>

      <ValuesSection />

      <section id="career">
        <CarrerSection />
      </section>
    </div>
  );
};

export default About;
