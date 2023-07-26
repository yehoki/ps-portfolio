'use client';

import EducationItem from '@/components/Education/EducationItem';
import ExperienceItem from '@/components/Experience/ExperienceItem';
import LoadingModal from '@/components/LoadingModal';
import MobileHeading from '@/components/MobileHeading';
import ProjectItem from '@/components/Projects/ProjectItem';
import Links from '@/components/SocialLinks/Links';
import useLoadingModal from '@/hooks/useLoadingModal';

export default function Home() {
  const loadingModal = useLoadingModal();
  const contentGuruJobDescription = [
    'Provided exceptional first-line support to customers, effectively troubleshooting and often resolving queries within 20 minutes, resulting in great customer experience.',
    'Worked within a team environment, actively participating in daily standups to discuss ongoing tasks and providing insights from previous resolutions.',
    'Participated in cross-department rotations, acquiring valuable experience in diverse areas including infrastructure and production deployment, during which I deployed a SQLServer database upgrade resulting in internal reports being delivered 10x faster.',
    'Collaborated frequently with the application engineering department, performing detailed discussions and analysis to identify the root causes of customer-reported issues and implement resolutions.',
  ];

  const contentGuruSkills = ['SQL Server', 'Python', 'Customer Service'];

  const universityOfBathSkills = ['R', 'MatLab', 'Python'];
  const universityOfHelsinkiSkills = ['Python', 'R'];

  return (
    <>
      <LoadingModal />

      <div
        className={`px-6 py-12 md:py-20 lg:py-0 lg:px-24 min-h-screen mx-auto max-w-screen-xl
        ${
          loadingModal.isOpen
            ? 'scale-0'
            : 'transition delay-[1000ms] duration-100 scale-100'
        }
        `}
      >
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header
            className={`lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24
          ${loadingModal.isOpen ? 'opacity-0' : 'opacity-100'}
          transition duration-[1500ms] delay-[1500ms] 
          `}
          >
            <div className="">
              <div className="text-5xl">Patryk Sienniak</div>
              <div className="text-2xl mt-3">Junior Software Engineer</div>
              <div className="mt-4 text-psText/60 max-w-xs">
                This will be a reasonably sized paragraph - not too long and not
                too short.
              </div>
              <Links />
            </div>
          </header>
          <main
            className={`lg:py-24 lg:w-1/2 
          ${
            loadingModal.isOpen
              ? 'opacity-0'
              : 'opacity-100 transition duration-[1500ms] delay-[2500ms]'
          } 
          `}
          >
            <div>
              <MobileHeading label="About" />
              <div className="text-psText/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aperiam, rerum quam, sapiente ducimus voluptatum
                incidunt ex quidem, impedit recusandae iste ab doloremque est!
                Beatae ipsum temporibus molestiae expedita tempora.
              </div>
            </div>
            <div className="">
              <MobileHeading label="Experience" />
              <div className="flex flex-col gap-2">
                <ExperienceItem
                  from="Sep 2022"
                  to="Mar 2023"
                  role="Support Engineer"
                  company="Content Guru"
                  location="Bracknell, U.K."
                  jobDescription={contentGuruJobDescription}
                />
              </div>
              {/* <div>View full Resume Link</div> */}
            </div>
            <div className="">
              <MobileHeading label="Projects" />
              <div>
                <ProjectItem title="Bookmarkt" description="" screenshot="" />
                <ProjectItem title="" description="" screenshot="" />
                {/* <ProjectItem title="" description="" screenshot="" />
              <ProjectItem title="" description="" screenshot="" />
              <ProjectItem title="" description="" screenshot="" /> */}
              </div>
            </div>
            <div>
              <MobileHeading label="Education" />
              <div className="flex flex-col gap-8">
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
              <div>Contact</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
