import { IconType } from 'react-icons';

interface SingleLinksProps {
  icon: IconType;
  destination: string;
}

const SingleLink: React.FC<SingleLinksProps> = ({
  icon: Icon,
  destination,
}) => {
  return (
    <div>
      <Icon size={24} className="rounded-xl" />
    </div>
  );
};

export default SingleLink;
