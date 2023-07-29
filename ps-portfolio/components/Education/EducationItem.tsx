'use client';
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
      group 
      lg:hover:bg-psText/5 duration-100 transition 
      lg:px-4 lg:py-2
      rounded-lg
      lg:group-hover/education:opacity-60
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
        <div
          className="text-psText/90 font-semibold
        lg:group-hover:text-psText transition lg:group-hover:delay-100 duration-300
        "
        >
          {degree}
        </div>
        <div
          className="text-psText/60 font-semibold mb-2
          lg:group-hover:text-psText/90 transition lg:group-hover:delay-[400ms] duration-300
        "
        >
          {place} · {location}
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
