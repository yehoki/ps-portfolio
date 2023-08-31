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
      <div className="absolute top-[6%] left-6 sm:left-10 lg:left-[7.5rem]  text-psText w-fit">
        <Link
          href={'/'}
          className="flex gap-1 items-center lg:text-psText/70 lg:hover:text-psText w-fit group mb-1"
        >
          <AiOutlineDoubleLeft
            size={18}
            className="group-hover:-translate-x-4 transition-transform duration-300"
          />
          <div className="">Back</div>
        </Link>
        <div className="text-3xl font-semibold">My Projects</div>
      </div>
      <ClientOnly>
        <div
          className="w-full h-2/3 flex gap-8
          lg:mx-20
         overflow-x-scroll
        rounded-md rounded-tl-none
        rounded-tr-none rounded-bl-none
        rounded-br-none
        no-scrollbar
        relative
        lg:hover:border-psText transition
        group/allProjects
        "
          ref={projectItemRef}
        >
          <AllProjectItem
            title="Bookmarkt"
            description="Goodreads clone web app. Find, store and review your favourite books, see what your friends are currently reading and what other people think about the books.
          Built using the Google Books API to retrieve book information."
            imageSrc="/images/bookmarkt-frontpage.png"
            skills={['Typescript', 'React', 'TailwindCSS', 'MongoDB']}
            githubLink="https://github.com/yehoki/bookmarkt"
            websiteLink="https://bookmarkt.vercel.app/"
          />
          <AllProjectItem
            title="Findify"
            description="Fully responsive, Spotify client themed web application, using the Spotify Web API to display the user's top tracks & artists, let them explore common artists and find new song recommendations based on their recent tracks."
            imageSrc="/images/findify.png"
            skills={['Typescript', 'React', 'TailwindCSS', 'Redux']}
            websiteLink="https://findify-phi.vercel.app/"
            githubLink="https://github.com/yehoki/Findify"
            youtube="https://www.youtube.com/watch?v=eMHTDfCbId4&ab_channel=PatrykSienniak"
          />
          <AllProjectItem
            title="RSA Token Generator & Encryptor"
            description="As a Support Engineer, I developed a Python program to automate the conversion of RSA tokens to QR codes, generate secure passwords and encrypt the files. 
            The program reduced manual processing time by around 90% and improved overall efficiency."
            imageSrc="/images/RSA-logo.jpeg"
            skills={['Python', 'Powershell']}
            githubLink="https://github.com/yehoki/firebnb"
            websiteLink="https://www.rsa.com/"
          />
          <AllProjectItem
            title="Countries API"
            description="Frontend mentor challenge: Mobile responsive web app, using an API to retrieve information about every country in the world.
            Search for any country and find the information you need for it."
            imageSrc="/images/countries-api-4.png"
            skills={['Typescript', 'React', 'TailwindCSS']}
            githubLink="https://github.com/yehoki/frontend-mentor-challenges/tree/main/countries-api"
            websiteLink="https://countries-api-bice-six.vercel.app/"
          />
          <AllProjectItem
            title="Update script"
            description="As a Support Engineer, I developed a Powershell script used for automatically checking if the Windows OS, Chrome and Edge are all up to date in a single click. This had to be done daily on around 20 computers, speeding up the process by 80% from completing it manually."
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png"
            skills={['Powershell']}
            githubLink="https://github.com/yehoki"
            websiteLink="https://github.com/yehoki"
          />
          <AllProjectItem
            title="Tip Calculator"
            description="Frontend mentor challenge: Calculate the tip based on the total amount, number of users and the tip percentage.  "
            imageSrc="/images/tip-calculator.png"
            skills={['Typescript', 'React', 'TailwindCSS']}
            githubLink="https://github.com/yehoki/frontend-mentor-challenges/tree/main/tip-calculator"
            websiteLink="https://tip-calculator-phi-henna.vercel.app/"
          />
          <AllProjectItem
            title="Firebnb"
            description="Airbnb clone, build from a tutorial by 'Code with Antonio' on YouTube. Used it to improve my understanding of responsiveness with Tailwind, React hooks and User authentication using Next-auth."
            imageSrc="/images/firebnb.png"
            skills={['Typescript', 'React', 'TailwindCSS', 'MongoDB']}
            githubLink="https://github.com/yehoki/firebnb"
            websiteLink="https://firebnb-yehoki.vercel.app/"
          />
          <AllProjectItem
            title="Weather App"
            description="Using a weather API to search and display the current weather in the place you search."
            imageSrc="/images/weather-app.png"
            skills={['HTML', 'CSS', 'Javascript']}
            githubLink="https://github.com/yehoki/weather-app/"
            websiteLink="https://yehoki.github.io/weather-app/"
          />
          <AllProjectItem
            title="Tic-Tac-Toe"
            description="Play tic-tac-toe against a friend on the same device."
            imageSrc="/images/tic-tac-toe.png"
            skills={['HTML', 'CSS', 'Javascript']}
            githubLink="https://github.com/yehoki/tic-tac-toe/"
            websiteLink="https://yehoki.github.io/tic-tac-toe/"
          />
          <AllProjectItem
            title="Etch-a-sketch"
            description="One of my first projects, a (very) simple sketching tool."
            imageSrc="/images/etch-a-sketch.png"
            skills={['HTML', 'CSS', 'Javascript']}
            githubLink="https://github.com/yehoki/etch-a-sketch"
            websiteLink="https://yehoki.github.io/etch-a-sketch/"
          />
          <AllProjectItem
            title="Calculator"
            description="Another one of my very early days projects. A basic 4 operation calculator."
            imageSrc="/images/calculator.png"
            skills={['HTML', 'CSS', 'Javascript']}
            githubLink="https://github.com/yehoki/calculator"
            websiteLink="https://yehoki.github.io/calculator/"
          />
        </div>
      </ClientOnly>
    </div>
  );
}
