interface NavLinkProps {
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label }) => {
  return <div>{label}</div>;
};
export default NavLink;
