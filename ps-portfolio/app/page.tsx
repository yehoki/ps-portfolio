'use client';

import EducationItem from '@/components/Education/EducationItem';
import ExperienceItem from '@/components/Experience/ExperienceItem';
import LargeNavigation from '@/components/LargeNavigation';
import LoadingModal from '@/components/LoadingModal';
import MobileHeading from '@/components/MobileHeading';
import ProjectItem from '@/components/Projects/ProjectItem';
import Links from '@/components/SocialLinks/Links';
import useFirstRender from '@/hooks/useFirstRender';
import useLoadingModal from '@/hooks/useLoadingModal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

export default function Home() {
  const loadingModal = useLoadingModal();
  const firstRender = useFirstRender();

  const [name, setName] = useState('');
  const [nameFinished, setNameFinished] = useState(false);
  const [role, setRole] = useState('');
  const [roleFinished, setRoleFinished] = useState(true);
  const [description, setDescription] = useState('');
  const [descriptionFinished, setDescriptionFinished] = useState(true);

  const [scrollPosition, setPosition] = useState(0);

  const [experiencePositionY, setExperiencePositionY] = useState(0);
  const [projectPositionY, setProjectPositionY] = useState(0);
  const [educationPositionY, setEducationPositionY] = useState(0);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const [screenDimensionY, setScreenDimensionY] = useState(0);

  const router = useRouter();

  const contentGuruJobDescription = [
    'Provide exceptional first-line support to customers, resolving queries within 20 minutes for a great customer experience.',
    'Collaborated closely with the application engineering department, analyzing customer-reported issues and implementing effective resolutions.',
  ];

  const coreStreamJobDescription = [
    'Enhanced platform first load velocity by over 90% for Analysts using .NET and Vue.js, while engineering platform improvements with the development team.',
    'Built an internal Chrome Extension used for automating tasks and data manipulation, saving up to 5 times the manual effort.',
  ];
  const coreStreamDeveloperJobDescription = [
    'Refactored hierarchy functionality into a single table structure, reducing average response time by 40%, applying synchronisation primitives (ReaderWriterLockSlim) to eliminate race condition scenarios.',
    'Implemented concurrent, background workflow services using asynchronous patterns with async/await and ConcurrentDictionary, alongside event-driven notification systems for UI updates.'
  ]
  const finbourneEngineerJobDescription = [
    'Extended transaction movement processing to support granular, configurable resolution rules, enabling complex account resolution scenarios that were previously unsupported.',
    'Mentored and onboarded a junior engineer through thorough code reviews and workshops, accelerating their introduction to the platform.'
  ]

  const universityOfBathSkills = ['R', 'MatLab', 'Python'];
  const universityOfHelsinkiSkills = ['R', 'Python'];

  const profileDetails = [
    'Patryk Sienniak',
    'Software Engineer',
    "I'm a Software Engineer specialising in building high performance applications.",
  ];

  const initialLoad = 400;
  const characterTimeGap = 50;
  const typingTimeGap = 2500;

  const roleTimeGap =
    initialLoad + characterTimeGap * profileDetails[0].length + typingTimeGap;

  const descriptionTimeGap =
    roleTimeGap + characterTimeGap * profileDetails[1].length + typingTimeGap;

  const postDescriptionTypingGap =
    descriptionTimeGap + 15 * profileDetails[2].length + typingTimeGap - 1500;

  const typewrite = (
    i: number,
    currentText: string,
    setter: Dispatch<SetStateAction<string>>,
    fullText: string,
    typingSpeed: number = characterTimeGap
  ) => {
    if (i < fullText.length + 1) {
      setTimeout(() => {
        typewrite(
          i + 1,
          currentText + fullText[i],
          setter,
          fullText,
          typingSpeed
        );
        setter(currentText);
      }, typingSpeed);
    }
  };

  const typingAnimation = () => {
    setTimeout(() => {
      setNameFinished(false);
      typewrite(
        0,
        name.includes(profileDetails[0]) ? '' : name,
        setName,
        profileDetails[0]
      );
    }, initialLoad);

    setTimeout(() => {
      setNameFinished(true);
      setRoleFinished(false);
    }, roleTimeGap - typingTimeGap / 2);

    setTimeout(() => {
      typewrite(
        0,
        role.includes(profileDetails[1]) ? '' : role,
        setRole,
        profileDetails[1]
      );
    }, roleTimeGap);

    setTimeout(() => {
      setRoleFinished(true);
      setDescriptionFinished(false);
    }, descriptionTimeGap - typingTimeGap / 2);

    setTimeout(() => {
      typewrite(
        0,
        description.includes(profileDetails[2]) ? '' : description,
        setDescription,
        profileDetails[2],
        15
      );
    }, descriptionTimeGap);

    setTimeout(() => {
      setDescriptionFinished(true);
    }, postDescriptionTypingGap);
  };

  useEffect(() => {
    setTimeout(() => {
      firstRender.onClose();
    }, 400);
    if (name === '' || role === '' || description === '') {
      typingAnimation();
    }
  }, []);

  useEffect(() => {
    firstRender.onOpen();
  }, [router]);

  useLayoutEffect(() => {
    if (experienceRef.current) {
      setExperiencePositionY(experienceRef.current.offsetTop);
    }
    if (projectRef.current) {
      setProjectPositionY(projectRef.current.offsetTop);
    }
    if (educationRef.current) {
      setEducationPositionY(educationRef.current.offsetTop);
    }

    const updatePos = () => {
      setPosition(window.scrollY);
    };

    const setHeight = () => {
      setScreenDimensionY(window.outerHeight);
    };

    window.addEventListener('scroll', updatePos);
    window.addEventListener('resize', setHeight);

    updatePos();
    setHeight();

    return () => {
      window.removeEventListener('scroll', updatePos);
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  const chooseSection = () => {
    const topOfScreen = scrollPosition + screenDimensionY / 4;
    if (topOfScreen < experiencePositionY) {
      return 'About';
    } else if (
      topOfScreen >= experiencePositionY &&
      topOfScreen < projectPositionY
    ) {
      return 'Experience';
    } else if (
      topOfScreen >= projectPositionY &&
      topOfScreen < educationPositionY
    ) {
      return 'Projects';
    } else if (topOfScreen >= educationPositionY) {
      return 'Education';
    }
    return 'About';
  };

  return (
    <>
      <div
        className={`px-6 py-12 md:py-20 lg:py-0 lg:px-24 min-h-screen mx-auto max-w-screen-xl `}
      >
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header
            className={`lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24`}
          >
            <div>
              <div className="lg:mb-12">
                <div className="text-5xl">
                  <span>
                    {name}
                    <span
                      className={`${nameFinished
                        ? 'text-transparent'
                        : 'animate-caretTextAnimate'
                        }`}
                    >
                      |
                    </span>
                  </span>
                </div>
                <div className="text-2xl mt-3">
                  <span>
                    {role}{' '}
                    <span
                      className={`${roleFinished
                        ? 'text-transparent'
                        : 'animate-caretTextAnimate'
                        }`}
                    >
                      |
                    </span>
                  </span>
                </div>
                <div className="mt-4 text-psText/60 max-w-xs">
                  <div>
                    {description}
                    <span
                      className={`${descriptionFinished
                        ? 'text-transparent'
                        : 'animate-caretTextAnimate'
                        }`}
                    >
                      |
                    </span>
                  </div>
                </div>
              </div>
              <LargeNavigation sectionSelect={chooseSection()} />
            </div>

            <div
              className={`w-fit ${firstRender.isOn
                ? 'opacity-0'
                : 'opacity-100 transition duration-[750ms] delay-[9s] lg:delay-[9750ms]'
                }`}
            >
              <Links />
            </div>
          </header>
          <main
            className={`lg:pb-24 lg:w-1/2
          ${firstRender.isOn
                ? 'opacity-0'
                : `opacity-100 transition duration-[750ms] delay-[9750ms] lg:delay-[10.5s]`
              } 
          `}
          >
            <div id="About" className="lg:pt-24 mb-12 lg:mb-20">
              <MobileHeading label="About" />
              <div className="text-psText/60">
                <div>
                  Born in Poland, growing up in London and having lived for a
                  year in both New York and Helsinki, I have a knack of rapidly
                  adapting to new environments, and acquiring the skills
                  necessary to progress. It&apos;s no different with technology.
                  My fascination began from an early age, learning how to read
                  while watching over my dad&apos;s shoulder as he was typing
                  away.
                </div>
                <br />
                <div>
                  Throughout all this I was always a problem solver. What started with
                  pacing through math problems at school, to figuring out why the request
                  failed every 7th call - if there was a problem, I always backed
                  myself to get it sorted.
                </div>
                <br />
                <div>
                  Which brings us to now. Holding the unpopular opinion of
                  preferring the cold to the warm, you can find me either running
                  around way too quick than my lungs can handle, making jokes which
                  make you groan then smile then groan again, or in front of the computer
                  figuring out where to put the next breakpoint.
                </div>
              </div>
            </div>
            <div id="Experience" ref={experienceRef} className="mb-12 lg:mb-20">
              <MobileHeading label="Experience" />
              <ExperienceItem
                from="Mar 2026"
                to="Now"
                role="Software Engineer"
                company="FINBOURNE Technology"
                location="London, U.K."
                jobDescription={finbourneEngineerJobDescription}
                jobSkills={["C#", ".NET", "Azure DevOps", "PostgreSQL", "Docker"]}
              />
              <ExperienceItem
                from="Nov 2024"
                to="Mar 2026"
                role="Back End Developer"
                company="CoreStream GRC"
                location="London, U.K."
                jobDescription={coreStreamDeveloperJobDescription}
                jobSkills={["C#", ".NET", "Azure DevOps", "SQL Server"]}
              />
              <ExperienceItem
                from="Nov 2023"
                to="Nov 2024"
                role="Configuration Analyst"
                company="CoreStream GRC"
                location="London, U.K."
                jobDescription={coreStreamJobDescription}
                jobSkills={['C#', 'JavaScript', 'SQL Server']}
              />
              <ExperienceItem
                from="Sep 2022"
                to="Mar 2023"
                role="Support Engineer"
                company="Content Guru"
                location="Bracknell, U.K."
                jobDescription={contentGuruJobDescription}
                jobSkills={['SQL Server', 'Python', 'Customer Service']}
              />
              <div className="text-psText lg:text-psText/70 lg:hover:text-psText w-fit group">
                <Link
                  href={'/resume'}
                  target="_blank"
                  className="flex gap-1 items-center group-hover:underline underline-offset-8
                  decoration-psAccentBright
                  "
                >
                  <div className="">See my CV</div>
                  <AiOutlineDoubleRight
                    size={18}
                    className="group-hover:translate-x-4 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
            <div id="Projects" ref={projectRef} className="mb-12 lg:mb-20">
              <MobileHeading label="Projects" />
              <div className="group/project flex flex-col gap-4 mb-8">
                <ProjectItem
                  title="Bookmarkt"
                  description="Goodreads clone web app. Find, store and review your favourite books, see what your friends are currently reading and what other people think about the books.
                  Built using the Google Books API to retrieve book information."
                  screenshot="/images/bookmarkt-frontpage.png"
                  skills={['Typescript', 'React', 'TailwindCSS', 'MongoDB']}
                  href="https://bookmarkt.vercel.app/"
                />
                <ProjectItem
                  title="Findify"
                  description="Fully responsive, Spotify client themed web application, using the Spotify Web API to display the user's top tracks & artists, let them explore common artists and find new song recommendations based on their recent tracks."
                  screenshot="/images/findify.png"
                  skills={['Typescript', 'React', 'TailwindCSS', 'Redux']}
                  href="https://findify-phi.vercel.app/"
                  youtube="https://www.youtube.com/watch?v=eMHTDfCbId4&ab_channel=PatrykSienniak"
                />
                <ProjectItem
                  title="Countries API"
                  description="Frontend mentor challenge: Mobile responsive web app, using an API to retrieve information about every country in the world.
                  Search for any country and find the information you need for it."
                  screenshot="/images/countries-api-4.png"
                  skills={['Typescript', 'React', 'TailwindCSS']}
                  href="https://countries-api-bice-six.vercel.app/"
                />
                <ProjectItem
                  title="RSA Token Generator & Encryptor"
                  description="As a Support Engineer, I developed a Python program to automate the conversion of RSA tokens to QR codes, generate secure passwords and encrypt the files. 
                  The program reduced manual processing time by around 90% and improved overall efficiency."
                  screenshot="/images/RSA-logo.jpeg"
                  skills={['Python', 'Powershell']}
                  href="https://www.rsa.com/"
                />
              </div>
              <div className="text-psText lg:text-psText/70 lg:hover:text-psText w-fit group">
                <Link
                  href={'/projects'}
                  className="flex gap-1 items-center group-hover:underline underline-offset-8
                  decoration-psAccentBright"
                >
                  <div className="">See all my projects</div>
                  <AiOutlineDoubleRight
                    size={18}
                    className="group-hover:translate-x-4 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
            <div id="Education" ref={educationRef} className="mb-12 lg:mb-20">
              <MobileHeading label="Education" />
              <div className="flex flex-col gap-8 group/education">
                <EducationItem
                  from="Sep 2018"
                  to="Jul 2022"
                  place="University of Bath"
                  location="Bath, U.K."
                  degree="(MMath) Master of Mathematics with study year abroad"
                  skills={universityOfBathSkills}
                />
                <EducationItem
                  from="Aug 2020"
                  to="Jul 2021"
                  place="University of Helsinki"
                  location="Helsinki, Finland"
                  degree="(MMath) Master of Mathematics with study year abroad"
                  skills={universityOfHelsinkiSkills}
                />
              </div>
            </div>
            <div
              className="lg:px-4 lg:py-2 rounded-lg
            group lg:hover:bg-psText/5 duration-100 transition
            mb-12 lg:mb-20
            "
            >
              <MobileHeading label="Contact" />
              <a
                href="mailto:patsenn2000@gmail.com"
                className="text-lg font-semibold flex cursor-pointer items-center gap-[2px] w-fit"
              >
                <div className="group-hover:underline transition duration-300 underline-offset-8 decoration-psAccentBright">
                  Get In Touch
                </div>
                <FiChevronRight
                  size={18}
                  className="group-hover:translate-x-4 transition duration-300"
                />
                <FiChevronRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 
                transition duration-150 group-hover:delay-150"
                />
              </a>
              <div
                className="text-psText 
              lg:text-psText/70 lg:group-hover:text-psText 
              transition duration-300 "
              >
                <br />
                <div>
                  I am always looking for an adventure worth having, so fear not
                  to reach out. Whether that is about a potential role, a coffee chat,
                  or you just need someone to waffle with. Chances are, I might take you up
                  for one of those.
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
