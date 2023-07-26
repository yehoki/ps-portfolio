import MobileHeading from '@/components/MobileHeading';
import Links from '@/components/SocialLinks/Links';

export default function Home() {
  return (
    <main className="h-full px-4 text-psText bg-psBg">
      <div className="pt-10">
        <div>Patryk Sienniak</div>
        <div>Full Stack Developer</div>
        <div>Brief Description</div>
        <Links />
      </div>
      <div>
        <MobileHeading label="About" />
        <div>About Me Text</div>
      </div>
      <div>
        <MobileHeading label="Experience" />
        <div>Experience section</div>
        <div>View full Resume Link</div>
      </div>
      <div>
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
  );
}
