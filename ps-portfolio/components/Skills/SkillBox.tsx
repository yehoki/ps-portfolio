interface SkillBoxProps {
  skillTitle: string;
  secondary?: boolean;
}

const SkillBox: React.FC<SkillBoxProps> = ({ skillTitle, secondary }) => {
  return (
    <div
      className={`
      ${
        secondary
          ? 'bg-psAccent/60 hover:bg-psAccent'
          : 'bg-psPrimary/60 hover:bg-psPrimary'
      }
       text-psText/80 text-xs py-1 px-2 
      rounded-lg w-fit 
      cursor-pointer hover:text-psText  transition`}
    >
      {skillTitle}
    </div>
  );
};

export default SkillBox;
