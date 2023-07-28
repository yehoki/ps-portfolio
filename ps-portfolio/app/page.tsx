'use client';

import EducationItem from '@/components/Education/EducationItem';
import ExperienceItem from '@/components/Experience/ExperienceItem';
import LargeNavigation from '@/components/LargeNavigation';
import LoadingModal from '@/components/LoadingModal';
import MobileHeading from '@/components/MobileHeading';
import ProjectItem from '@/components/Projects/ProjectItem';
import Links from '@/components/SocialLinks/Links';
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

export default function Home() {
  const loadingModal = useLoadingModal();
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

  const contentGuruSkills = ['SQL Server', 'Python', 'Customer Service'];

  const universityOfBathSkills = ['R', 'MatLab', 'Python'];
  const universityOfHelsinkiSkills = ['R', 'Python'];

  const profileDetails = [
    'Patryk Sienniak',
    'Software Engineer',
    'This will be a reasonably sized paragraph - not too long and not too short.',
  ];

  const initialLoad = 3250;
  const characterTimeGap = 50;
  const typingTimeGap = 2500;

  const roleTimeGap =
    initialLoad + characterTimeGap * profileDetails[0].length + typingTimeGap;

  const descriptionTimeGap =
    roleTimeGap + characterTimeGap * profileDetails[1].length + typingTimeGap;

  const postDescriptionTypingGap =
    descriptionTimeGap + 15 * profileDetails[2].length + typingTimeGap;

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
    if (name === '' || role === '' || description === '') {
      typingAnimation();
    }
  }, []);

  useEffect(() => {
    loadingModal.onOpen();
    loadingModal.openBlock();
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
      <LoadingModal />
      <div
        className={`px-6 py-12 md:py-20 lg:py-0 lg:px-24 min-h-screen mx-auto max-w-screen-xl 
        ${
          loadingModal.isOpen
            ? 'scale-0'
            : 'transition delay-[500ms] duration-100 scale-100'
        }
        `}
      >
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header
            className={`lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24
          ${loadingModal.isOpen ? 'opacity-0' : 'opacity-100'}
          transition duration-[1500ms] delay-[800ms] 
          `}
          >
            <div>
              <div className="lg:mb-12">
                <div className="text-5xl">
                  <span>
                    {name}
                    <span
                      className={`${
                        nameFinished
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
                      className={`${
                        roleFinished
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
                      className={`${
                        descriptionFinished
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
              className={`w-fit ${
                loadingModal.isOpen
                  ? 'opacity-0'
                  : 'opacity-100 transition duration-[1s] delay-[9.5s] lg:delay-[10.5s]'
              }`}
            >
              <Links />
            </div>
          </header>
          <main
            className={`lg:pb-24 lg:w-1/2
          ${
            loadingModal.isOpen
              ? 'opacity-0'
              : `opacity-100 transition duration-[1s] delay-[10.5s] lg:delay-[11.5s]`
          } 
          `}
          >
            <div id="About" className="lg:pt-24 mb-12 lg:mb-20">
              <MobileHeading label="About" />
              <div className="text-psText/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aperiam, rerum quam, sapiente ducimus voluptatum
                incidunt ex quidem, impedit recusandae iste ab doloremque est!
                Beatae ipsum temporibus molestiae expedita tempora.
              </div>
            </div>
            <div id="Experience" ref={experienceRef} className="mb-12 lg:mb-20">
              <MobileHeading label="Experience" />
              <div className="flex flex-col gap-2 group/experience mb-8">
                <ExperienceItem
                  from="Sep 2022"
                  to="Mar 2023"
                  role="Support Engineer"
                  company="Content Guru"
                  location="Bracknell, U.K."
                  jobDescription={contentGuruJobDescription}
                />
              </div>
              <div className="text-psText lg:text-psText/70 lg:hover:text-psText w-fit group">
                <Link
                  href={'/resume'}
                  target="_blank"
                  className="flex gap-1 items-center "
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
                  href="https://github.com/yehoki/bookmarkt"
                />
                <ProjectItem
                  title="RSA Token Generator & Encryptor"
                  description="Developed a Python program to automate the conversion of RSA tokens to QR codes, generate secure passwords and encrypt the files. 
                  The program reduced manual processing time by around 90% and improved overall efficiency."
                  screenshot="/images/RSA-logo.jpeg"
                  skills={['Python', 'Powershell']}
                  href="https://www.rsa.com/"
                />
                <ProjectItem
                  title="Countries API"
                  description="Frontend mentor challenge: Mobile responsive web app, using an API to retrieve information about every country in the world.
                  Search for any country and find the information you need for it."
                  screenshot="/images/countries-api-4.png"
                  skills={['Typescript', 'React', 'TailwindCSS']}
                  href="https://countries-api-bice-six.vercel.app/"
                />
              </div>
              <div className="text-psText lg:text-psText/70 lg:hover:text-psText w-fit group">
                <Link href={'/projects'} className="flex gap-1 items-center ">
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
            <div>
              <MobileHeading label="Contact" />
              <div className="h-96">Contact</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
