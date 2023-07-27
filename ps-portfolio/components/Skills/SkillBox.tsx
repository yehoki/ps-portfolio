interface SkillBoxProps {
  skillTitle: string;
  secondary?: boolean;
}

const SkillBox: React.FC<SkillBoxProps> = ({ skillTitle, secondary }) => {
  return (
    <div
      className={`
    bg-psPrimary text-psText
    lg:bg-psPrimary/60 lg:hover:bg-psPrimary
    text-psText/80 lg:hover:text-psText
      text-xs py-1 px-[10px] 
      rounded-full w-fit 
      lg:cursor-pointer transition
      select-none`}
    >
      {skillTitle}
    </div>
  );
};

export default SkillBox;
