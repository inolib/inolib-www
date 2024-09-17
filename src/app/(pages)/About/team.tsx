import Image from "next/image";

import { teamMembers } from "~/DATA/data";
import type { TeamMember } from "~/lib/types/features/componentTypes/types";

const TeamSection = () => {
  return (
    <section className="bg-[#FAFAFA] px-4 py-16" aria-labelledby="team-heading">
      <div className="mx-auto max-w-6xl text-center">
        <h2 id="team-heading" className="mb-4 text-3xl font-bold">
          Notre équipe
        </h2>
        <p className="mb-12 text-center text-gray-600 sm:mx-40 sm:max-w-80 md:mx-72 md:max-w-xl">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to
          do your best work.
        </p>
        <div className="mx-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div key={index} className="flex h-80 flex-col items-center rounded-t-full bg-[#EEF5F6]">
              <Image src={member.image} alt={member.alt} width={90} height={90} className="mb-4 rounded-full pt-14" />
              <h3 className="pb-2 text-xl font-semibold">{member.name}</h3>
              <p className="pb-2 text-sm text-blue-600">{member.position}</p>
              <p className="max-w-xl pb-4 pl-2 pr-2 pt-2 text-center text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
