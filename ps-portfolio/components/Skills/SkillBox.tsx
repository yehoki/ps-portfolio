interface SkillBoxProps {
  skillTitle: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ skillTitle }) => {
  return (
    <div
      className="bg-psPrimary/60 text-psText/80 text-xs py-1 px-2 
      rounded-full w-fit 
      cursor-pointer hover:text-psText hover:bg-psPrimary transition"
    >
      {skillTitle}
    </div>
  );
};

export default SkillBox;
