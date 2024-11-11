'use client';
import { useState } from 'react';
import SkillBox from '../Skills/SkillBox';

interface ExperienceItemProps {
  from: string;
  to: string;
  role: string;
  company: string;
  location: string;
  jobDescription: string[];
  jobSkills: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  from,
  to,
  role,
  company,
  location,
  jobDescription,
  jobSkills,
}) => {
  const mainJobDescription = jobDescription[0];
  const remainderJobDescription =
    jobDescription.length > 1 ? jobDescription.slice(1) : [];

  return (
    <div className="flex flex-col gap-2 group/experience mb-8">
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
            {
              <ul className="">
                {jobDescription.map(
                  (jobItem, i) =>
                    // <li className="my-1" key={jobItem.length}>
                    jobItem + (i == jobDescription.length ? '' : ' ')
                )}
              </ul>
            }
          </div>
          <div className="flex flex-wrap gap-2">
            {jobSkills.map((jobSkill) => (
              <SkillBox skillTitle={jobSkill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
