import Image from 'next/image';
import SkillBox from '../Skills/SkillBox';

interface ProjectItemProps {
  title: string;
  description: string;
  skills?: string[];
  screenshot: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  skills,
  screenshot,
}) => {
  return (
    <div
      className="text-sm group grid gap-4 sm:grid-cols-8 lg:px-4 lg:py-2 rounded-lg group
    lg:hover:bg-psText/5 transition duration-300 lg:group-hover/project:opacity-60 lg:hover:!opacity-100"
    >
      <div className="sm:order-2 sm:col-span-6">
        <div className="mb-2">{title}</div>
        <div
          className="text-xs text-psText/40 leading-[18px] mb-2
        lg:group-hover:text-psText/70 transition duration-300 lg:group-hover:delay-300
        "
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          ratione soluta omnis maiores, recusandae, a harum porro dolorum dicta
          modi inventore. Aliquid, possimus! Cupiditate illo error, explicabo
          sed iure excepturi.
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {skills &&
            skills.map((skill) => <SkillBox key={skill} skillTitle={skill} />)}
        </div>
      </div>

      <div className="relative w-[200px] sm:order-1 sm:w-full sm:h-2/3 lg:w-full lg:h-[75px] lg:max-h-[80px] sm:col-span-2">
        <Image
          src={'/placeholder2.jpeg'}
          fill
          alt={`${title} screenshot`}
          className="rounded-md border-[2px] border-psText/20 
          group-hover:border-psText/50 transition"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
