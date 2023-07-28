'use client';

import SkillBox from '@/components/Skills/SkillBox';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';

interface AllProjectItemProps {
  title: string;
  description: string;
  imageSrc: string;
  skills: string[];
  githubLink: string;
  websiteLink: string;
}

const AllProjectItem: React.FC<AllProjectItemProps> = ({
  title,
  description,
  imageSrc,
  skills,
  githubLink,
  websiteLink,
}) => {
  return (
    <div
      className="h-full w-3/4 sm:w-2/3 md:w-7/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3 
      flex flex-col flex-shrink-0
      py-4 sm:py-8 px-6 sm:px-10
      lg:hover:bg-psText/5 
      lg:group-hover/allProjects:opacity-60 lg:hover:!opacity-100
      transition
      rounded-lg
      "
    >
      <div
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 
      rounded-lg mb-4 relative"
      >
        <Image
          fill
          src={`${imageSrc !== '' ? imageSrc : '/images/RSA-logo.jpeg'}`}
          alt="RSA"
          className="pointer-events-none rounded-lg"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <div className="text-2xl mb-2">{title}</div>
          <div className="text-sm text-psText/70 mb-2">{description}</div>
          <div className="flex gap-2 items-center">
            {skills.map((skill) => (
              <SkillBox key={skill} skillTitle={skill} />
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <a
            target="_blank"
            href={`${
              githubLink !== ''
                ? githubLink
                : 'https://github.com/yehoki/bookmarkt'
            }`}
          >
            <AiFillGithub size={32} className="cursor-pointer" />
          </a>
          <a
            target="_blank"
            href={`${
              websiteLink !== ''
                ? websiteLink
                : 'https://github.com/yehoki/bookmarkt'
            }`}
          >
            <TbWorld size={32} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllProjectItem;
