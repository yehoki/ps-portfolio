'use client';
import Image from 'next/image';
import SkillBox from '../Skills/SkillBox';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import { AiOutlineYoutube } from 'react-icons/ai';

interface ProjectItemProps {
  title: string;
  description: string;
  skills?: string[];
  screenshot: string;
  href: string;
  youtube?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  skills,
  screenshot,
  href,
  youtube,
}) => {
  return (
    <div
      className="text group grid gap-4 sm:grid-cols-8 lg:px-4 lg:py-4 rounded-lg group
    lg:hover:bg-psText/5 transition duration-300 lg:group-hover/project:opacity-60 lg:hover:!opacity-100"
    >
      <div className="sm:order-2 sm:col-span-6">
        <div className="flex justify-between items-center mb-2 ">
          <a href={href} className="flex gap-2 items-center w-fit group/title">
            <div className={`font-semibold transition duration-300`}>
              <p>{title}</p>
            </div>
            <div className="flex w-fit items-center gap-[2px] ">
              <FiChevronRight
                size={18}
                className="
              group-hover/title:translate-x-4 lg:group-hover:translate-x-4 transition duration-300"
              />
              <FiChevronRight
                size={18}
                className="
              opacity-0 group-hover/title:opacity-100 lg:group-hover:opacity-100 transition duration-300"
              />
            </div>
          </a>
          {youtube && (
            <a
              href={youtube}
              className="text-psText/40 hover:text-psText transition duration-300"
              title="View a demonstration on YouTube"
              target="_blank"
            >
              <AiOutlineYoutube size={32} />
            </a>
          )}
        </div>
        <div
          className="text-sm font-light text-psText/40 mb-2
        lg:group-hover:text-psText/70 transition duration-300 lg:group-hover:delay-300
        "
        >
          {description}
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {skills &&
            skills.map((skill) => <SkillBox key={skill} skillTitle={skill} />)}
        </div>
      </div>

      <div
        className="relative w-[160px] min-h-[80px] 
            aspect-[3/2]
        sm:order-1 sm:w-11/12 sm:h-2/3 md:w-3/4 lg:w-full lg:h-[55px] sm:col-span-2 rounded-sm 
       group-hover:border-psText/80 transition"
      >
        <Image
          src={`${
            screenshot && screenshot !== ''
              ? screenshot
              : '/images/placeholder2.jpeg'
          }`}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          alt={`${title} screenshot`}
          className="rounded-sm  
         group-hover:border-psText/80 transition"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
