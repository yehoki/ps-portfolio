'use client';
import SkillBox from '../Skills/SkillBox';

interface ExperienceItemProps {
  from: string;
  to: string;
  role: string;
  company: string;
  location: string;
  jobDescription: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  from,
  to,
  role,
  company,
  location,
  jobDescription,
}) => {
  const mainJobDescription = jobDescription[0];
  const remainderJobDescription =
    jobDescription.length > 1 ? jobDescription.slice(1) : [];
  return (
    <div
      className="grid sm:grid-cols-8 sm:gap-8 md:gap-4 
    lg:px-4 lg:py-2 rounded-lg
    group
    lg:hover:bg-psText/5 duration-100 transition
    lg:group-hover/experience:opacity-60
    lg:hover:!opacity-100
    "
    >
      <div
        className="uppercase text-xs text-psText/40 font-semibold
      my-1 whitespace-nowrap lg:whitespace-normal tracking-wide
      sm:col-span-2
      lg:group-hover:text-psText/70 transition duration-300 lg:group-hover:delay-100
      
      "
      >
        {from} — {to}
      </div>
      <div className="sm:col-span-6">
        <div className="text-psText/90 font-semibold">{role}</div>
        <div
          className="text-psText/60 font-semibold mb-2
        lg:group-hover:text-psText/90 transition duration-300 lg:group-hover:delay-[400ms]"
        >
          {company} · {location}
        </div>
        <div
          className="text-sm text-psText/40 font-light
        lg:group-hover:text-psText/70 transition lg:group-hover:delay-700 duration-300
        mb-2"
        >
          Provide exceptional first-line support to customers, resolving queries
          within 20 minutes for a great customer experience. Collaborated
          closely with the application engineering department, analyzing
          customer-reported issues and implementing effective resolutions.
          Gained valuable experience through cross-department rotations,
          including infrastructure and production deployment.
          {/* Job Descr. */}
          {/* <ul className="">
            {jobDescription.map((jobItem) => (
              <li className="my-1" key={jobItem.length}>
                {jobItem}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="flex flex-wrap gap-2">
          <SkillBox skillTitle="SQL Server" />
          <SkillBox skillTitle="Python" />
          <SkillBox skillTitle="Customer Service" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
