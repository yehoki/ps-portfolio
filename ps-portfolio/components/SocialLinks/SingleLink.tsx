import Link from 'next/link';
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
      <a href={destination}>
        <Icon
          size={30}
          className="rounded-xl text-psText/70 
        hover:text-psText transition
        cursor-pointer"
        />
      </a>
    </div>
  );
};

export default SingleLink;
