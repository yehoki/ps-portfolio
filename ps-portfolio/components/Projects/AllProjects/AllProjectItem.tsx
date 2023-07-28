'use client';

import SkillBox from '@/components/Skills/SkillBox';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';

const AllProjectItem = () => {
  return (
    <div
      className="h-full w-full sm:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 
      flex flex-col justify-center flex-shrink-0
      py-4 sm:py-8 px-6 sm:px-10
      hover:bg-psText/5 
      group-hover/allProjects:opacity-60 hover:!opacity-100
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
          src={'/images/RSA-logo.jpeg'}
          alt="RSA"
          className="pointer-events-none rounded-lg"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <div className="text-2xl mb-2">Bookmarkt</div>
          <div className="text-sm text-psText/70 mb-2">
            This is a realtively lengthy description about the project, it
            should outline what the project is about and what things I used and
            learnt from it.
          </div>
          <div className="flex gap-2 items-center">
            <SkillBox skillTitle="test" />
            <SkillBox skillTitle="test" />
            <SkillBox skillTitle="test" />
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <a href="/">
            <AiFillGithub size={32} className="cursor-pointer" />
          </a>

          <TbWorld size={32} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default AllProjectItem;
