import ExperienceItem from '@/components/Experience/ExperienceItem';
import MobileHeading from '@/components/MobileHeading';
import Links from '@/components/SocialLinks/Links';

export default function Home() {
  const contentGuruJobDescription = [
    'Provided exceptional first-line support to customers, effectively troubleshooting and often resolving queries within 20 minutes, resulting in great customer experience.',
    'Worked within a team environment, actively participating in daily standups to discuss ongoing tasks and providing insights from previous resolutions.',
    'Participated in cross-department rotations, acquiring valuable experience in diverse areas including infrastructure and production deployment, during which I deployed a SQLServer database upgrade resulting in internal reports being delivered 10x faster.',
    'Collaborated frequently with the application engineering department, performing detailed discussions and analysis to identify the root causes of customer-reported issues and implement resolutions.',
  ];

  return (
    <div className="px-6 py-12 lg:py-0 min-h-screen mx-auto max-w-screen-xl">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
          <div className="">
            <div className="text-5xl">Patryk Sienniak</div>
            <div className="text-2xl mt-3">Junior Software Engineer</div>
            <div className="mt-4">Brief Description</div>
            <Links />
          </div>
        </header>
        <main className="lg:py-24">
          <div>
            <MobileHeading label="About" />
            <div>About Me Text</div>
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
            <div>View full Resume Link</div>
          </div>
          <div className="">
            <MobileHeading label="Projects" />
            <div>Projects section</div>
          </div>
          <div>
            <MobileHeading label="Education" />
            <div>Education section</div>
          </div>
        </main>
      </div>
    </div>
  );
}
