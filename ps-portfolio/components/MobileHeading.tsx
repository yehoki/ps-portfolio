interface MobileHeadingProps {
  label: string;
}

const MobileHeading: React.FC<MobileHeadingProps> = ({ label }) => {
  return (
    <div className="block lg:hidden uppercase py-8 text-sm font-semibold tracking-wider">
      {label}
    </div>
  );
};

export default MobileHeading;
