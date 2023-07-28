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
    <div className={`${selected ? 'text-pink-500' : ''}`}>
      <a href={href}>{label}</a>
    </div>
  );
};

export default NavigationLink;
