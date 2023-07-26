interface MobileHeadingProps {
  label: string;
}

const MobileHeading: React.FC<MobileHeadingProps> = ({ label }) => {
  return <div className="uppercase">{label}</div>;
};

export default MobileHeading;
