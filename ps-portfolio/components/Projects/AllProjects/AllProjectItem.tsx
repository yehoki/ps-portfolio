'use client';

import SkillBox from '@/components/Skills/SkillBox';
import Image from 'next/image';
import { AiFillGithub, AiOutlineYoutube } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';

interface AllProjectItemProps {
  title: string;
  description: string;
  imageSrc: string;
  skills: string[];
  githubLink: string;
  websiteLink: string;
  youtube?: string;
}

const AllProjectItem: React.FC<AllProjectItemProps> = ({
  title,
  description,
  imageSrc,
  skills,
  githubLink,
  websiteLink,
  youtube,
}) => {
  return (
    <div
      className="h-full w-3/4 2xl:max-w-1/3 sm:w-2/3 md:w-7/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3
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
          src={`${imageSrc !== '' ? imageSrc : ''}`}
          alt={`${title} screenshot`}
          className="pointer-events-none rounded-lg"
        />
      </div>
      <div className="">
        <div className="">
          <div className="flex justify-between gap-8 mb-2">
            <div className="text-2xl ">{title}</div>
            <div className="flex gap-2">
              {youtube && (
                <a
                  className="text-psText transition duration-300 lg:hover:-translate-y-1"
                  target="_blank"
                  href={youtube}
                >
                  <AiOutlineYoutube size={32} />
                </a>
              )}
              <a
                className="text-psText transition duration-300 lg:hover:-translate-y-1"
                target="_blank"
                href={`${
                  githubLink !== '' ? githubLink : 'https://github.com/yehoki'
                }`}
              >
                <AiFillGithub size={32} className="cursor-pointer" />
              </a>
              <a
                className="text-psText transition duration-300 lg:hover:-translate-y-1"
                target="_blank"
                href={`${
                  websiteLink !== '' ? websiteLink : 'https://github.com/yehoki'
                }`}
              >
                <TbWorld size={32} className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="text-sm text-psText/70 mb-2">{description}</div>
          <div className="flex gap-2 items-center flex-wrap">
            {skills.map((skill) => (
              <SkillBox key={skill} skillTitle={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectItem;
