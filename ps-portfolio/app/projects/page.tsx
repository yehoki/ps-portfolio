'use client';
import Carousel from '@/components/Carousel';
import ClientOnly from '@/components/ClientOnly';
import AllProjectItem from '@/components/Projects/AllProjects/AllProjectItem';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

export default function Page() {
  const projectItemRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let pos = {
      top: 0,
      left: 0,
      x: 0,
      y: 0,
    };

    const mouseDownHandler = (e: MouseEvent) => {
      console.log(e);
      if (projectItemRef.current) {
        pos = {
          left: projectItemRef.current.scrollLeft,
          top: projectItemRef.current.scrollTop,
          x: e.clientX,
          y: e.clientY,
        };
        projectItemRef.current.style.cursor = 'grabbing';
        projectItemRef.current.style.userSelect = 'none';
      }
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      if (projectItemRef.current) {
        projectItemRef.current.scrollTop = pos.top - dy;
        projectItemRef.current.scrollLeft = pos.left - dx;
      }
    };

    const mouseUpHandler = (e: MouseEvent) => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (projectItemRef.current) {
        projectItemRef.current.style.cursor = 'grab';
        projectItemRef.current.style.removeProperty('user-select');
      }
    };

    document.addEventListener('mousedown', mouseDownHandler);
    return () => document.removeEventListener('mousedown', mouseDownHandler);
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center relative">
      <div className="absolute top-20 left-4 lg:left-40 group text-psText lg:text-psText/70 lg:hover:text-psText w-fit">
        <Link href={'/'} className="flex gap-1 items-center">
          <AiOutlineDoubleLeft
            size={18}
            className="group-hover:-translate-x-4 transition-transform duration-300"
          />
          <div className="">Back</div>
        </Link>
        <div>My Projects</div>
      </div>
      <ClientOnly>
        {/* <Carousel>
          <div className="bg-pink-400 h-[90%] w-11/12 rounded-lg p-4">0</div>
          <div className="bg-pink-400 h-[90%] w-11/12 rounded-lg p-4">1</div>
          <div className="bg-pink-400 h-[90%] w-11/12 rounded-lg p-4">2</div>
          <div className="bg-pink-400 h-[90%] w-11/12 rounded-lg p-4">3</div>
          <div className="bg-pink-400 h-[90%] w-11/12 rounded-lg p-4">4</div>
          <div className="bg-pink-400 h-[90%] w-11/12 rounded-lg p-4">5</div>
        </Carousel> */}
        <div
          className="w-full h-1/2 flex gap-8
          lg:mx-20
         overflow-x-scroll
        rounded-md rounded-tl-none
        rounded-tr-none rounded-bl-none
        rounded-br-none
        no-scrollbar
        relative border-y-[1px] border-psText/70
        hover:border-psText transition
        group/allProjects
        "
          ref={projectItemRef}
        >
          <AllProjectItem />
          <AllProjectItem />
          <AllProjectItem />
          <AllProjectItem />
          <AllProjectItem />
          <AllProjectItem />
        </div>
      </ClientOnly>
    </div>
  );
}
