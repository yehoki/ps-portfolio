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
    'Provide exceptional first-line support to customers, resolving queries within 20 minutes for a great customer experience.',
    'Collaborated closely with the application engineering department, analyzing customer-reported issues and implementing effective resolutions.',
  ];

  const contentGuruSkills = ['SQL Server', 'Python', 'Customer Service'];

  const universityOfBathSkills = ['R', 'MatLab', 'Python'];
  const universityOfHelsinkiSkills = ['R', 'Python'];

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
            className={`lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24
          ${loadingModal.isOpen ? 'opacity-0' : 'opacity-100'}
          transition duration-[1500ms] delay-[1500ms] 
          `}
          >
            <div>
              <div className="text-5xl">Patryk Sienniak</div>
              <div className="text-2xl mt-3">Junior Software Engineer</div>
              <div className="mt-4 text-psText/60 max-w-xs">
                This will be a reasonably sized paragraph - not too long and not
                too short.
              </div>
            </div>
            <Links />
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
            <div className="mb-12 lg:mb-20">
              <MobileHeading label="About" />
              <div className="text-psText/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aperiam, rerum quam, sapiente ducimus voluptatum
                incidunt ex quidem, impedit recusandae iste ab doloremque est!
                Beatae ipsum temporibus molestiae expedita tempora.
              </div>
            </div>
            <div className="mb-12 lg:mb-20">
              <MobileHeading label="Experience" />
              <div className="flex flex-col gap-2 group/experience">
                <ExperienceItem
                  from="Sep 2022"
                  to="Mar 2023"
                  role="Support Engineer"
                  company="Content Guru"
                  location="Bracknell, U.K."
                  jobDescription={contentGuruJobDescription}
                />
              </div>
              <div className="text-psText/70 hover:text-psText w-fit cursor-pointer">
                See my CV
              </div>
            </div>
            <div className="mb-12 lg:mb-20">
              <MobileHeading label="Projects" />
              <div className="group/project flex flex-col gap-4">
                {/* <ProjectItem title="Bookmarkt" description="" screenshot="" /> */}
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
                {/* <ProjectItem title="" description="" screenshot="" />
              <ProjectItem title="" description="" screenshot="" />
              <ProjectItem title="" description="" screenshot="" /> */}
              </div>
            </div>
            <div>
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
              <div>Contact</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
