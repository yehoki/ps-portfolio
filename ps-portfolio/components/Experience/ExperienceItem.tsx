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
  return (
    <div className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div
        className="uppercase text-xs text-psText/40 font-semibold
      my-1 whitespace-nowrap lg:whitespace-normal tracking-wide
      sm:col-span-2"
      >
        {from} — {to}
      </div>
      <div className="sm:col-span-6">
        <div className="text-psText/90 font-semibold">{role}</div>
        <div className="text-psText/60 font-semibold">
          {company} · {location}
        </div>
        <div className="text-sm text-psText/40 font-light">
          {/* Job Descr. */}
          <ul className="">
            {jobDescription.map((jobItem) => (
              <li className="my-1" key={jobItem.length}>
                {jobItem}
              </li>
            ))}
          </ul>
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