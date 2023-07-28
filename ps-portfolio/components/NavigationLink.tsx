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
      className={`text-psText/70 ${
        selected ? 'text-psAccent -translate-x-4' : ''
      } transition duration-200`}
    >
      <a href={href}>{label}</a>
    </div>
  );
};

export default NavigationLink;
