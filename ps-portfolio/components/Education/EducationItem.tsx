import SkillBox from '../Skills/SkillBox';

interface EducationItemProps {
  place: string;
  from: string;
  to: string;
  location: string;
  degree: string;
  skills: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({
  place,
  from,
  to,
  location,
  degree,
  skills,
}) => {
  return (
    <div
      className="grid sm:grid-cols-8 sm:gap-8 md:gap-4 
      group lg:hover:bg-psSecondary duration-500
      transition lg:px-4 lg:py-2
      rounded-lg"
    >
      <div
        className="uppercase text-xs text-psText/40 font-semibold
    my-1 whitespace-nowrap lg:whitespace-normal tracking-wide
    sm:col-span-2"
      >
        {from} — {to}
      </div>
      <div className="sm:col-span-6">
        <div className="text-psText/90 font-semibold">{degree}</div>
        <div
          className="text-psText/60 font-semibold
        "
        >
          {place} · {location}
        </div>
        <div className="text-sm text-psText/40 font-light">
          {/* Job Descr. */}
          <ul className=""></ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBox secondary={true} key={skill} skillTitle={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
