'use client';

interface NavigationLinkProps {
  selected: boolean;
  href: string;
  label: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  selected,
  href,
  label,
}) => {
  return (
    <div
      className={` ${
        selected ? 'text-psText -translate-x-4' : 'text-psText/50'
      } transition duration-200`}
    >
      <a href={href}>{label}</a>
    </div>
  );
};

export default NavigationLink;
