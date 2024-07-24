import Image from 'next/image';
import { teamMembers, TeamMember } from '~/DATA/data';

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="team-heading">
      <div className="max-w-6xl mx-auto text-center ">
        <h2 id="team-heading" className="text-3xl font-bold mb-4">Notre équipe</h2>
        <p className="text-gray-600 mb-12 md:max-w-xl text-center md:mx-72 sm:max-w-80 sm:mx-40">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
        </p>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 mx-14 ">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div key={index} className="flex flex-col items-center bg-[#F5F9FA] rounded-t-full  h-80">
              <Image 
                src={member.image} 
                alt={member.alt} 
                width={90} 
                height={90} 
                className=" rounded-full mb-4 pt-14" 
              />
              <h3 className="text-xl font-semibold pb-2">{member.name}</h3>
              <p className="text-sm text-blue-600 pb-2">{member.position}</p>
              <p className="text-gray-600 text-center pr-2 pl-2 pt-2 pb-4 max-w-xl">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
