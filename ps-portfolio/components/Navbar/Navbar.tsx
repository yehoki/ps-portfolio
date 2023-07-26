import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div
      className="w-full px-32 py-12 
    bg-psNavy text-psMint-light
     shadow-md font-semibold text-2xl"
    >
      <div className="flex flex-row items-center sm:justify-between">
        <div>Patryk Sienniak</div>
        <div className="flex flex-row gap-16">
          <NavLink label="About" />
          <NavLink label="Resume" />
          <NavLink label="Projects" />
          <NavLink label="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
