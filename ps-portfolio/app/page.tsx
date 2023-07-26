import MobileHeading from '@/components/MobileHeading';
import Links from '@/components/SocialLinks/Links';

export default function Home() {
  return (
    <div className="px-6 py-12 lg:py-0 min-h-screen mx-auto max-w-screen-xl">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
          <div className="">
            <div className="text-5xl">Patryk Sienniak</div>
            <div className="text-2xl mt-3">Full Stack Developer</div>
            <div className="mt-4">Brief Description</div>
            <Links />
          </div>
        </header>
        <main className="lg">
          <div>
            <MobileHeading label="About" />
            <div>About Me Text</div>
          </div>
          <div className="h-[1500px]">
            <MobileHeading label="Experience" />
            <div>Experience section</div>
            <div>View full Resume Link</div>
          </div>
          <div className="">
            <MobileHeading label="Projects" />
            <div>Projects section</div>
          </div>
          {/* <Navbar />
      <HomeDisplay />
      <div className="bg-psMint-dark h-[50%]">1234</div>
      <div className="bg-psMint-light h-[30%]">1234</div>
      <div className="bg-psBlack h-[20%]">1234</div>
      <div className="bg-psNavy h-[15%]">1234</div>
      <div className="bg-psGrey h-[10%]">1234</div> */}
        </main>
      </div>
    </div>
  );
}
