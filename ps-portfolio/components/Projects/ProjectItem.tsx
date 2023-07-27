'use client';
import Image from 'next/image';
import SkillBox from '../Skills/SkillBox';
import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  description: string;
  skills?: string[];
  screenshot: string;
  href: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  skills,
  screenshot,
  href,
}) => {
  return (
    <div
      className="text group grid gap-4 sm:grid-cols-8 lg:px-4 lg:py-4 rounded-lg group
    lg:hover:bg-psText/5 transition duration-300 lg:group-hover/project:opacity-60 lg:hover:!opacity-100"
    >
      <div className="sm:order-2 sm:col-span-6">
        <a href={href}>
          <div className="mb-2 font-semibold">{title}</div>
        </a>
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
        className="relative w-[160px] h-[80px] sm:order-1 sm:w-11/12 sm:h-2/3 md:w-3/4 lg:w-full lg:h-[55px] sm:col-span-2 rounded-sm 
      border border-psText/40 group-hover:border-psText/80 transition"
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
          border border-psText/40 group-hover:border-psText/80 transition"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
